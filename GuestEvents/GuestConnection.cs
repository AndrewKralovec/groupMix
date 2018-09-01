using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using GroupMix.Extensions.WebSockets;
using GroupMix.Models; 
using Newtonsoft.Json;

namespace GroupMix.GuestEvents
{
    public class GuestConnection : WebSocketConnection
    {
        public GuestConnection(WebSocketHandler handler) : base(handler)
        {
        }

        public string UserID { get; set; }

        public override async Task ReceiveAsync(string message)
        {
            var receiveMessage = JsonConvert.DeserializeObject<ReceiveMessage>(message);

            var receiver = Handler.Connections.FirstOrDefault(guest => 
            {
                return ((GuestConnection)guest).UserID == receiveMessage.Receiver; 
            });

            if (receiver != null)
            {
                var sendMessage = JsonConvert.SerializeObject(new SendMessage
                {
                    Sender = UserID,
                    Message = receiveMessage.Message
                });

                await receiver.SendMessageAsync(sendMessage);
            }
            else
            {
                var sendMessage = JsonConvert.SerializeObject(new SendMessage
                {
                    Sender = UserID,
                    Message = "Can not seed to " + receiveMessage.Receiver
                });

                await SendMessageAsync(sendMessage);
            }
        }
    }
}
