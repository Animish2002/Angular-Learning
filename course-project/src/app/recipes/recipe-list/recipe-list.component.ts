import { Component, Input, Output,EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent {
  @Input() recipes: Recipe[] = [];
  @Output() recipeSelected = new EventEmitter<Recipe>();

  onSelectRecipe(recipe: Recipe){
    this.recipeSelected.emit(recipe);
  }

}
