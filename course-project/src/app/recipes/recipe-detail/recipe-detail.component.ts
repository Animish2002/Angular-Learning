import { Component, Input, OnInit, inject } from '@angular/core';
import { Recipe } from '../recipe.model';
import { ActivatedRoute, Router } from '@angular/router';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css'],
})
export class RecipeDetailComponent implements OnInit {
  @Input() recipe: Recipe | null = null;

  private recipeService = inject(RecipeService);

  constructor(private route: ActivatedRoute, private router: Router) {}
  id = this.route.snapshot.params['id'];

  ngOnInit() {
    const id = +this.route.snapshot.params['id'];
    this.recipe = this.recipeService.getRecipe(id);

    this.route.params.subscribe((params) => {
      const newId = +params['id'];
      this.recipe = this.recipeService.getRecipe(newId);
    });
  }

  onActionSelected(action: string) {
    switch (action) {
      case 'shopping':
        this.onAddToShoppingList();
        break;
      case 'edit':
        this.onEditRecipe(this.id);
        break;
    }
  }

  onAddToShoppingList() {
    console.log('Added to shopping list');
    this.router.navigate(['/recipes']);
    // Add your logic
  }

  onEditRecipe(id: number) {
    this.router.navigate(['/recipes/' + id + '/edit']);
  }
}
