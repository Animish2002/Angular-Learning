import { Component ,EventEmitter,Input, Output} from '@angular/core';



@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.html',
  styleUrl: './user.css',
})
export class User {
  @Input({required:true}) avatar!: string;
  @Input({required:true}) name!: string;
  @Input({required:true}) selected!: boolean;
  @Input() id!: string;
  @Output() select = new EventEmitter<{ id: string; name: string }>();   //most used and standard way of using output function, here we create eventEmitter object manually here

  // select = output<string>();    //stores the evenemitter inside of it 


  get imagePath(){
    return `assets/users/${this.avatar}`
  }

  onselectedUser(){
   this.select.emit({ id: this.id, name: this.name });
  }
}
