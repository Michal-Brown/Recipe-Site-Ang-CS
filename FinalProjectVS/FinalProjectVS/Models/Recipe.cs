using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FinalProjectVS
{
    public class Recipe
    {
        // Data Members
        public string ID { get; set; }
        public string Name { get; set; }
        public string CategoryID { get; set; }
        public int PrepTime { get; set; }
        public int Difficulty { get; set; }
        public DateTime Date { get; set; }
        public string[] Ingredients { get; set; }
        public string[] Directions { get; set; }
        public string UserID { get; set; }
        public string Image { get; set; }
        public static int RecipeID = 0;

        // Constructors
        public Recipe()
        {

        }
        public Recipe(string name, DateTime date, string[] ingredients, string[] directions)
        {
            ID = (++RecipeID).ToString();
            Name = name;
            Date = date;
            Ingredients = ingredients;
            Directions = directions;
        }
        public Recipe(string name, string categoryID, int prepTime, int difficulty, DateTime date, string[] ingredients, string[] directions, string userID, string image)
            :this(name,date,ingredients,directions)
        {
            CategoryID = categoryID;
            PrepTime = prepTime;
            Difficulty = difficulty;
            UserID = userID;
            Image = image;
        }
    }
}
