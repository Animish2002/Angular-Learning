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
  @Input() id!: string;
  @Output() select = new EventEmitter();


  get imagePath(){
    return `assets/users/${this.avatar}`
  }

  onselectedUser(){
    this.select.emit(this.id);
  }
}
