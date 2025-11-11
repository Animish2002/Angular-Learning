import { Component, Input } from '@angular/core';
import { Recipe } from '../recipe.model';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent {
onDeleteRecipe() {
throw new Error('Method not implemented.');
}
onEditRecipe() {
throw new Error('Method not implemented.');
}
  @Input() recipe: Recipe | null = null;

isDropdownOpen = false;

toggleDropdown() {
  this.isDropdownOpen = !this.isDropdownOpen;
}

onAddToShoppingList() {
  this.isDropdownOpen = false;
  // your logic
}

disableSelect = new FormControl(false);
}
