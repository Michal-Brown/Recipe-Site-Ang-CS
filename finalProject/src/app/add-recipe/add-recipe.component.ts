import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Category } from 'src/models/category';
import { Recipe } from 'src/models/recipe';
import { CategoryService } from '../category.service';
import { RecipeService } from '../recipe.service';


@Component({
  selector: 'app-add-recipe',
  templateUrl: './add-recipe.component.html',
  styleUrls: ['./add-recipe.component.css']
})
export class AddRecipeComponent implements OnInit {
  recipe: Recipe = new Recipe(null, null, null, null, null, new Date(), [""], [""], null, null);
  categories: Category[];
  //ingredient:string=null;
  constructor(public categorySrv: CategoryService, public recipeSrv: RecipeService,public router:Router) { }

  ngOnInit(): void {
    this.categorySrv.GetCategories().subscribe(
      succ => {
        this.categories = succ;
        console.log(this.categories);
      }, error => {
        console.log("ERROR: " + error.status);
      })
  }
  addIngredient(){
    if(this.recipe.Ingredients.length-1!=null){
      this.recipe.Ingredients.push("");
    }else{

    }
    //this.recipe.Ingredients.push("");
    // this.ingredient=null;
    //this.recipe.Ingredients.length++;
  }
  addRecipe() {
    this.recipeSrv.AddRecipe(this.recipe).subscribe(
      succ => {
        alert("Recipe added successfully");
        this.router.navigate(['AllRecipes']);
      }, error => {
        console.log("ERROR " + error.status);
        alert("error "+error.status);
      }
    )
  }
}