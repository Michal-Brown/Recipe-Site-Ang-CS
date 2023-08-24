import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddRecipeComponent } from './add-recipe/add-recipe.component';
import { AllRecipesComponent } from './all-recipes/all-recipes.component';
import { EditRecipeComponent } from './edit-recipe/edit-recipe.component';
import { LogInComponent } from './log-in/log-in.component';
import { RecipeDetailsComponent } from './recipe-details/recipe-details.component';
import { RegisterComponent } from './register/register.component';
import { SmallRecipeComponent } from './small-recipe/small-recipe.component';

const routes: Routes = [
  {path: "AllRecipes",component:AllRecipesComponent},
  {path: "LogIn",component:LogInComponent}, 
  {path: "Register",component:RegisterComponent}, 
  {path: "Register/:Name",component:RegisterComponent},
  {path: "RecipeDetails",component:RecipeDetailsComponent}, 
  {path: "AddRecipe",component:AddRecipeComponent}, 
  {path: "SmallRecipe",component:SmallRecipeComponent},
  {path: "EditRecipe",component:EditRecipeComponent},
  {path:"",redirectTo:"LogIn",pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
