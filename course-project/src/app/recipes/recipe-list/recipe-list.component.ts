import { Component, OnInit ,inject} from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [];

  private recipeService = inject(RecipeService);

  ngOnInit() {
    this.recipes = this.recipeService.getRecipes();
  }

  onSelectRecipe(recipe: Recipe) {
    this.recipeService.recipeSelected.emit(recipe);
  }
}
