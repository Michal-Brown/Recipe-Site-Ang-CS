import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Recipe } from 'src/models/recipe';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  url = "https://localhost:44316/API/recipe/";
  //  
  
  constructor(public httpClient: HttpClient) { }

  GetRecipes() {
    return this.httpClient.get<Recipe[]>("https://localhost:44316/API/recipe/GetRecipes");
  }
  GetRecipeByID(id: string) {
    return this.httpClient.get<Recipe>(this.url + "GetRecipes?id=" + id);
  }
  GetRecipesByPrepTime(maxMinute: number) {
    return this.httpClient.get<Recipe[]>(this.url += "GetRecipes?maxMinute=" + maxMinute);
  }
  AddRecipe(recipe: Recipe) {
    return this.httpClient.post<Recipe>(this.url += "AddRecipe?recipe="+recipe, recipe);
  }
  RemoveRecipe(id: string) {
    return this.httpClient.delete(this.url += "RemoveRecipe?id=" + id);
  }
  SetRecipe(recipe: Recipe) {
    return this.httpClient.put<Recipe>(this.url += "RemoveRecipe", recipe);
  }
}
