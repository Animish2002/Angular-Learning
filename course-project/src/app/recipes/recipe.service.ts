import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root',
})

export class RecipeService {
  //with class defination in class based model
  // private recipes: Recipe[] = [
  //   new Recipe(
  //     'Healthy Salad',
  //     'Filled and mixed with all the goodness of healthy an fresh salad',
  //     'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  //   ),
  //   new Recipe(
  //     'Hazulnut Latte',
  //     'A delicious and healthy drink made with hazelnuts and milk',
  //     'https://images.unsplash.com/photo-1495774856032-8b90bbb32b32?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  //   ),
  // ];

  recipeSelected = new EventEmitter<Recipe>();

  //with interface
  private recipes: Recipe[] = [
  {
    name: 'Healthy Salad',
    description: 'Filled and mixed with all the goodness of healthy and fresh salad',
    imagePath: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd'
  },
  {
    name: 'Hazelnut Latte',
    description: 'A delicious and healthy drink made with hazelnuts and milk',
    imagePath: 'https://images.unsplash.com/photo-1495774856032-8b90bbb32b32'
  }
];
  getRecipes() {
    return this.recipes.slice();
  }
}


// User clicks recipe ➜ RecipeListComponent.onSelectRecipe()
//   ➜ emits event via RecipeService.recipeSelected
//       ➜ RecipesComponent subscribed to that event
//           ➜ updates selectedRecipe
//               ➜ passes to RecipeDetailComponent via @Input()
//                   ➜ UI updates with selected recipe details
