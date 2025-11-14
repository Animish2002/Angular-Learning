import { Component, EventEmitter, Output, inject } from '@angular/core';
import { ShoppingListService } from '../shoppingList.service';
import { NgForm } from '@angular/forms';
import { Ingredients } from '../ingredients.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css'],
})
export class ShoppingEditComponent {
  private shoppingListService = inject(ShoppingListService);
  name: string = '';
  amount: number = 0;

  onAddItem(form: NgForm) {
    const value = form.value;
    const newIngredient: Ingredients = {
      name: value.name,
      amount: value.amount,
    };

    this.shoppingListService.addIngredient(newIngredient);
    console.log(form);
    form.reset();
  }

  onReset(form: NgForm) {
    form.reset();
  }

  // onSubmit() {
  //   const newIngredient = { name: this.name, amount: this.amount };
  //   this.shoppingListService.addIngredient(newIngredient);
  //   this.name = '';
  //   this.amount = 0;
  // }
}
