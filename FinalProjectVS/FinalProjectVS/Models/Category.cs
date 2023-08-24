using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FinalProjectVS
{
    public class Category
    {
        // Data Members
        public string ID { get; set; }
        public string Name { get; set; }
        public string Icon { get; set; }

        // Constructors
        public Category()
        {

        }
        public Category(string id, string name, string icon)
        {
            ID = id;
            Name = name;
            Icon = icon;
        }
    }
}
