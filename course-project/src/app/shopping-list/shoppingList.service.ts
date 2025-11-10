import { Injectable,EventEmitter } from '@angular/core';
import { Ingredients } from './ingredients.model';

@Injectable({
  providedIn: 'root',
})

export class ShoppingListService {
  ingredientsChanged = new EventEmitter<Ingredients[]>();
  ingredientAdded  = new EventEmitter<Ingredients>();

  ingredients: Ingredients[] = [
    { name: 'Apples', amount: 5 },
    { name: 'Tomatoes', amount: 12 },
  ];

  getIngredients() {
    return this.ingredients.slice();
  }

  addIngredient(ingredient: Ingredients) {
    this.ingredients.push(ingredient);
    this.ingredientsChanged.emit(this.ingredients.slice()); // emit updated list
  }
  
}
