import { Component, EventEmitter, Output ,inject} from '@angular/core';
import { ShoppingListService } from '../shoppingList.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent {
  private shoppingListService = inject(ShoppingListService);
    name: string='';
    amount:number=0;

    onSubmit() {
    const newIngredient = { name: this.name, amount: this.amount };
    this.shoppingListService.addIngredient(newIngredient);
    this.name = '';
    this.amount = 0;
  }
}
