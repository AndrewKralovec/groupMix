using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace GroupMix.Models
{
    public class ReceiveMessage
    {
        public string Receiver { get; set; }

        public string Message { get; set; }
    }

    public class SendMessage
    {
        public string Sender { get; set; }

        public string Message { get; set; }
    }

    public class ReceiveEvent
    {
        public string Receiver { get; set; }

        public string EventID { get; set; }

        public object PayLoad { get; set; }
    }
}
