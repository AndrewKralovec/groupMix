using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace GroupMix.Extensions.WebSockets
{
    public class WebSocketMiddleware
    {
        private readonly RequestDelegate next;
        private WebSocketHandler webSocketHandler { get; set; }

        public WebSocketMiddleware(RequestDelegate next, WebSocketHandler webSocketHandler)
        {
            this.next = next;
            this.webSocketHandler = webSocketHandler;
        }
        // Open connection 
        public async Task Invoke(HttpContext context)
        {
            if (context.WebSockets.IsWebSocketRequest)
            {
                var connection = await this.webSocketHandler.OnConnected(context);
                if (connection != null)
                {
                    await this.webSocketHandler.ListenConnection(connection);
                }
                else
                {
                    context.Response.StatusCode = 404;
                }
            }
        }
    }
}
