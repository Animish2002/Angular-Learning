import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RecipeService } from '../recipe.service';
import { Router } from '@angular/router';
import { Ingredients } from '../../shopping-list/ingredients.model';

@Component({
  selector: 'app-edit-recipe',
  templateUrl: './edit-recipe.component.html',
  styleUrls: ['./edit-recipe.component.css'],
})
export class EditRecipeComponent implements OnInit {
  recipeFormData!: FormGroup;
  imagePreview: string = '';
  isEditMode = false;

  constructor(
    private fb: FormBuilder,
    private recipeService: RecipeService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.recipeFormData = this.fb.group({
      name: ['', Validators.required,],
      imagePath: ['', Validators.required],
      description: ['', Validators.required],
      ingredients: this.fb.array([]),
    });

    // image preview subscription
    this.recipeFormData.get('imagePath')?.valueChanges.subscribe((value) => {
      this.imagePreview = value;
    });
  }

  get ingredients(): FormArray {
    return this.recipeFormData.get('ingredients') as FormArray;
  }

  addIngredient() {
    const ingredientGroup = this.fb.group({
      name: ['', Validators.required],
      amount: ['', [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)]],
    });

    this.ingredients.push(ingredientGroup);
  }

  removeIngredient(i: number) {
    this.ingredients.removeAt(i);
  }

  onSubmit() {
    if (this.recipeFormData.invalid) return;

    const recipe = this.recipeFormData.value;

    this.recipeService.addRecipe(recipe);
    this.router.navigate(['/recipes']);
  }
}
