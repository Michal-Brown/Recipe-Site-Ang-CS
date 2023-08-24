import { Component, OnInit } from '@angular/core';
import { Recipe } from 'src/models/recipe';
import { RecipeService } from '../recipe.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-all-recipes',
  templateUrl: './all-recipes.component.html',
  styleUrls: ['./all-recipes.component.css']
})

export class AllRecipesComponent implements OnInit {

  public recipies: Recipe[];

  constructor(public recipeSrv: RecipeService, public router: Router) { }

  ngOnInit(): void {
    this.recipeSrv.GetRecipes().subscribe(
      succ => {
        this.recipies = succ;
        console.log(this.recipies);
      }), error => {
        console.log("ERROR: " + error.status);
      }
  }
  AddRecipeNavigate() {
    this.router.navigate(['AddRecipe']);
  }
}


