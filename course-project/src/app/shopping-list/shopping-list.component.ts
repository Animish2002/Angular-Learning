import { Component, Input } from '@angular/core';
import { Ingredients } from './ingredients.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent {
 
   ingredients:Ingredients[] = [new Ingredients('Apples', 5),new Ingredients('Tomatoes', 12)];
  
   onAddIngredient(ingredient:{name:string, amount:number}){
    this.ingredients.push(ingredient);
   }



}