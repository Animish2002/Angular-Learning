import { Component, Input, OnInit,inject } from '@angular/core';
import { Recipe } from '../recipe.model';
import { FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css'],
})
export class RecipeDetailComponent implements OnInit {
  onDeleteRecipe() {
    throw new Error('Method not implemented.');
  }
  onEditRecipe() {
    throw new Error('Method not implemented.');
  }
  @Input() recipe: Recipe | null = null;

  isDropdownOpen = false;

  constructor(private route: ActivatedRoute) {}

   
   private recipeData = inject(RecipeService);

  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  onAddToShoppingList() {
    this.isDropdownOpen = false;
    // your logic
  }

ngOnInit() {
  const id = +this.route.snapshot.params['id'];
  this.recipe = this.recipeData.getRecipe(id);

  this.route.params.subscribe((params) => {
    const newId = +params['id'];
    this.recipe = this.recipeData.getRecipe(newId);
  });
}



  disableSelect = new FormControl(false);
}
