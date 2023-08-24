using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FinalProjectVS
{
    public class User
    {
        // Data Members
        public string ID { get; set; }
        public string Name { get; set; }
        public string Address { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }

        public static int UserID = 0;

        // Constructors
        public User()
        {
            
        }
        public User(string name, string address, string email, string password)
        {
            ID = (++UserID).ToString();
            Name = name;
            Address = address;
            Email = email;
            Password = password;
        }
    }
}
