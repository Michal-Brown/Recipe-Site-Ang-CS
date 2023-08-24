using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;
using FinalProjectVS;


namespace FinalProjectVS.Controllers
{
    [EnableCors(origins: "*", headers: "*", methods: "*")]
    public class RecipeController : ApiController
    {
        [HttpGet]
        public List<Recipe> GetRecipes()
        {
            return DB.Recipes;
        }
        [HttpGet]
        public Recipe GetRecipeByID(string id)
        {
            return DB.Recipes.FirstOrDefault((recipe) => recipe.ID == id);
        }

        [HttpGet]
        public List<Recipe> GetRecipesByPrepTime(int maxMinute)
        {
            return DB.Recipes.FindAll((recipe) => recipe.PrepTime <= maxMinute);
        }
 // NEEDS UPDATE vvv
        [HttpPost]
        public IHttpActionResult AddRecipe(Recipe recipe)
        {
            Recipe newRecipe = new Recipe(recipe.Name, recipe.CategoryID, recipe.PrepTime, recipe.Difficulty, recipe.Date, recipe.Ingredients, recipe.Directions, recipe.UserID, recipe.Image);
            DB.Recipes.Add(newRecipe);
            return Ok();
        }

        [HttpDelete]
        public void RemoveRecipe(string id)
        {
            DB.Recipes.Remove(DB.Recipes.FirstOrDefault((recipe) => recipe.ID == id));
        }

       
        [HttpPut]
        public Recipe SetRecipe(Recipe recipe)
        {
            Recipe r = DB.Recipes.FirstOrDefault((item) => item.ID == recipe.ID);
            r.Name = recipe.Name;
            r.CategoryID = recipe.CategoryID;
            r.PrepTime = recipe.PrepTime;
            r.Difficulty = recipe.Difficulty;
            r.Date = recipe.Date;
            r.Ingredients = recipe.Ingredients;
            r.Directions = recipe.Directions;
            r.UserID = recipe.UserID;
            r.Image = recipe.Image;

            return recipe;
        }
    }
}
