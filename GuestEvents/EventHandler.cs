using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace GroupMix.GuestEvents
{
    public class EventHandler
    {
        public object UpdateEvents(Int64 x)
        {
            return new { value = x };
        }
        public object Voted()
        {
            return new { };
        }
        public object UserInvite()
        {
            return new { };
        }
        public object UserArrived()
        {
            return new { };
        }
        public object InvokeMethod(string methodName, List<object> args)
        {
            var result = GetType().GetMethod(methodName).Invoke(this, args.ToArray());
            return result;
        }
    }
}
