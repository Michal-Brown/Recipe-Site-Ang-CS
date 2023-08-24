using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FinalProjectVS
{
    public static class DB
    {
        public static List<User> Users = new List<User>()
        {
            new User("a","aaa","a.@gmail.com","1"),
            new User("b","bbb","b.@gmail.com","2"),
            new User("c","ccc","c.@gmail.com","3"),
        };
        public static List<Category> Categories = new List<Category>()
        {
            new Category("1","Appetizer","Unknown"),
            new Category("2","Soups","Unknown"),
            new Category("3","Salad","Unknown"),
            new Category("4","Diet","Unknown"),
            new Category("5","Drinks","Unknown"),
            new Category("6","Desserts","Unknown"),
            new Category("7","Cakes","Unknown"),
            new Category("8","cookies","Unknown"),
        };
        public static List<Recipe> Recipes = new List<Recipe>()
        {
            new Recipe("onion soup","2",60,3,DateTime.Today,new string[]{ "5 onions"},new string[]{"1.slice the onions","2.put them on the pot" },"1","src"),
            new Recipe("Chocolate Cake","6",45,1,DateTime.Today,new string[]{ "Cocoa","sugar","Eggs"},new string[]{"1.slice the onions","2.put them on the pot" },"2","src"),
        };
    }
}
