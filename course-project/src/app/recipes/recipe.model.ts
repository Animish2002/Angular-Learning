import { Ingredients } from "../shopping-list/ingredients.model";

export interface Recipe {
  name: string;
  description: string;
  imagePath: string;
  ingredients: Ingredients[];
}


//Class based model implementation  
// export class Recipe{
//     public name: string;
//     public description: string;
//     public imagePath: string;

//     constructor(name: string, desc: string, imagePath: string){
//         this.name = name;
//         this.description = desc;
//         this.imagePath = imagePath;
//     }
// }