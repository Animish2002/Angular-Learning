import { Component, inject } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
})
export class AuthComponent {
  private router = inject(Router);
  onSubmit(form: NgForm) {
    console.log(form.value);

    localStorage.setItem('isLoggedIn', 'true');

    this.router.navigate(['/recipes']);
  }
}
