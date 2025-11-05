import { Component,EventEmitter,Output } from '@angular/core';

@Component({
  selector: 'app-profile-form',
  templateUrl: './profile-form.component.html',
  styleUrls: ['./profile-form.component.css']
})
export class ProfileFormComponent {
  @Output() userProfile = new EventEmitter<{ name: string; email: string }>();
  name: string=''
  email: string=''

  array: number[] = [1,2,3,4,5,6,7,8,9,10];
  
  onSubmit(){
    // console.log(this.userProfile); 

    this.userProfile.emit({
        name: this.name,
       email:this.email
    });
  }
}
