import { Injectable,EventEmitter } from '@angular/core';
import { Ingredients } from './ingredients.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})

export class ShoppingListService {
  ingredientsChanged = new Subject<Ingredients[]>();
  ingredientAdded  = new Subject<Ingredients>();

  ingredients: Ingredients[] = [
    { name: 'Apples', amount: 5 },
    { name: 'Tomatoes', amount: 12 },
  ];

  getIngredients() {
    return this.ingredients.slice();
  }

  addIngredient(ingredient: Ingredients) {
    this.ingredients.push(ingredient);
    this.ingredientsChanged.next(this.ingredients.slice()); // emit updated list
  }
  
}
