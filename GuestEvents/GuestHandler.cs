using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using GroupMix.Extensions.WebSockets;
using Microsoft.AspNetCore.Http;

namespace GroupMix.GuestEvents
{
    public class GuestHandler : WebSocketHandler
    {
        protected override int BufferSize { get => 1024 * 4; }

        public override async Task<WebSocketConnection> OnConnected(HttpContext context)
        {
            var name = context.Request.Query["UserID"];
            if (!string.IsNullOrEmpty(name))
            {
                var connection = Connections.FirstOrDefault(guest => 
                {
                    return ((GuestConnection) guest).UserID == name;
                });

                if (connection == null)
                {
                    var webSocket = await context.WebSockets.AcceptWebSocketAsync();

                    connection = new GuestConnection(this)
                    {
                        UserID = name,
                        WebSocket = webSocket
                    };

                    Connections.Add(connection);
                }

                return connection;
            }

            return null;
        }
    }
}
