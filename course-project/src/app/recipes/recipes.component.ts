import { Component,inject, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';
import { RecipeService } from './recipe.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {
  selectedRecipe: Recipe | null = null;
  
  private recipeData = inject(RecipeService);

  constructor(private route :ActivatedRoute) { }


  ngOnInit() {     
  }
  }


