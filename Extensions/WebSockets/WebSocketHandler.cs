using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.WebSockets;
using System.Text;
using System.Threading;
using System.Threading.Tasks;

namespace GroupMix.Extensions.WebSockets
{
    public abstract class WebSocketHandler
    {
        protected abstract int BufferSize { get; }

        private List<WebSocketConnection> connections = new List<WebSocketConnection>();
        // Return active connections 
        public List<WebSocketConnection> Connections { get => this.connections; }
        public String CreateChannelID { get => Guid.NewGuid().ToString(); }

        public async Task ListenConnection(WebSocketConnection connection)
        {
            var buffer = new byte[BufferSize];

            while (connection.WebSocket.State == WebSocketState.Open)
            {
                var result = await connection.WebSocket.ReceiveAsync(
                    buffer: new ArraySegment<byte>(buffer),
                    cancellationToken: CancellationToken.None);

                if (result.MessageType == WebSocketMessageType.Text)
                {
                    var message = Encoding.UTF8.GetString(buffer, 0, result.Count);
                    await connection.ReceiveAsync(message);
                }
                else if (result.MessageType == WebSocketMessageType.Close)
                {
                    await OnDisconnected(connection);
                }
            }
        }

        public virtual async Task OnDisconnected(WebSocketConnection connection)
        {
            if (connection != null)
            {
                this.connections.Remove(connection);
                await connection.WebSocket.CloseAsync(
                    closeStatus: WebSocketCloseStatus.NormalClosure,
                    statusDescription: "Closed by the WebSocketHandler",
                    cancellationToken: CancellationToken.None);
            }
        }

        // Let children decided what to do on connect
        public abstract Task<WebSocketConnection> OnConnected(HttpContext context);
    }
}
