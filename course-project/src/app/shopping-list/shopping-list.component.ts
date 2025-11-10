import { Component, inject, Input, OnInit } from '@angular/core';
import { Ingredients } from './ingredients.model';
import { ShoppingListService } from './shoppingList.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})

export class ShoppingListComponent implements OnInit {
  //  ingredients:Ingredients[] = [new Ingredients('Apples', 5),new Ingredients('Tomatoes', 12)];
  ingredients: Ingredients[] = [];

  private shoppingList = inject(ShoppingListService);

  ngOnInit() {
    this.ingredients = this.shoppingList.getIngredients();

     this.shoppingList.ingredientsChanged.subscribe(
      (ingredients: Ingredients[]) => {
        this.ingredients = ingredients;
      }
    );
  }
}
