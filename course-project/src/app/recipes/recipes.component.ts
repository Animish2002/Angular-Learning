import { Component } from '@angular/core';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent {
  selectedRecipe: Recipe | null = null;
  onRecipeSelected(recipe: Recipe){
    this.selectedRecipe = recipe;
  }

  recipes: Recipe[] = [new Recipe(
    'Healthy Salad',
    'Filled and mixed with all the goodness of healthy an fresh salad', 
    'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  ),new Recipe(
    'Hazulnut Latte',
    'A delicious and healthy drink made with hazelnuts and milk',
    'https://images.unsplash.com/photo-1495774856032-8b90bbb32b32?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  )];

}
