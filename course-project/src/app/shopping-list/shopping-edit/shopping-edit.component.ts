import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent {
  @Output() addIngredient = new EventEmitter<{ name:string; amount:number}>();
  name: string='';
  amount:number=0;

onSubmit(){
  this.addIngredient.emit({ name: this.name, amount: this.amount });
  console.log(this.name, this.amount);
}
}
