import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { SmallRecipeComponent } from './small-recipe/small-recipe.component';
import { AllRecipesComponent } from './all-recipes/all-recipes.component';
import { AddRecipeComponent } from './add-recipe/add-recipe.component';
import { RecipeDetailsComponent } from './recipe-details/recipe-details.component';
import { EditRecipeComponent } from './edit-recipe/edit-recipe.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LogInComponent } from './log-in/log-in.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    SmallRecipeComponent,
    AllRecipesComponent,
    AddRecipeComponent,
    RecipeDetailsComponent,
    EditRecipeComponent,
    LogInComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
