import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { Subject } from 'rxjs';

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

  recipeSelected = new Subject<Recipe>();

  //with interface
  private recipes: Recipe[] = [
  {
    id: 1,
    name: 'Healthy Salad',
    description: 'Filled and mixed with all the goodness of healthy and fresh salad',
    imagePath: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd',
    ingredients: [{name: 'Orange', amount: 5 }, {name: 'Banana', amount: 2 }]
  },
  {
    id: 2,
    name: 'Hazelnut Latte',
    description: 'A delicious and healthy drink made with hazelnuts and milk',
    imagePath: 'https://images.unsplash.com/photo-1495774856032-8b90bbb32b32',
    ingredients: [{name: 'Hazelnut', amount: 1}, {name: 'Milk', amount: 2}]
  },
  {
    id: 3,
    name: 'Avocado Toast',
    description: 'A delicious and healthy breakfast made with avocado and toast',
    imagePath: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd',
    ingredients: [{name: 'Avocado', amount: 2}, {name: 'Bread', amount: 1}]
  },
  {
    id: 4,
    name: 'Quinoa Salad',
    description: 'A delicious and healthy salad made with quinoa and vegetables',
    imagePath: 'https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd',
    ingredients: [{name: 'Quinoa', amount: 1}, {name: 'Vegetables', amount: 5}]
  }
];
  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(id: number) {
  return this.recipes[id - 1];
}

}


// User clicks recipe ➜ RecipeListComponent.onSelectRecipe()
//   ➜ emits event via RecipeService.recipeSelected
//       ➜ RecipesComponent subscribed to that event
//           ➜ updates selectedRecipe
//               ➜ passes to RecipeDetailComponent via @Input()
//                   ➜ UI updates with selected recipe details
