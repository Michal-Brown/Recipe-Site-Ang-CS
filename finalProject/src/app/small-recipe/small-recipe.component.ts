import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from 'src/models/recipe';
import { Router } from '@angular/router';

@Component({
  selector: 'app-small-recipe',
  templateUrl: './small-recipe.component.html',
  styleUrls: ['./small-recipe.component.css']
})
export class SmallRecipeComponent implements OnInit {

  @Input()
  public recipe:Recipe; 

  constructor() { }

  ngOnInit(): void {
  }

}
// =new Recipe(null,null,null,null,null,null,null,null,null,null)