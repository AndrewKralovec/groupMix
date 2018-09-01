using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.DependencyInjection;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using System.Threading.Tasks;

namespace GroupMix.Extensions.WebSockets
{
    public static class WebSocketExtension
    {
        public static IApplicationBuilder MapWebSocketManager(this IApplicationBuilder app, PathString path, WebSocketHandler handler)
        {
            return app.Map(path, (application) => 
            {
                application.UseMiddleware<WebSocketMiddleware>(handler);
            });
        }

        public static IServiceCollection AddWebSocketManager(this IServiceCollection services)
        {
            var handlerBaseType = typeof(WebSocketHandler);

            foreach (var type in Assembly.GetEntryAssembly().ExportedTypes)
            {
                if (type.GetTypeInfo().BaseType == handlerBaseType)
                {
                    services.AddSingleton(type);
                }
            }

            return services;
        }
    }
}
