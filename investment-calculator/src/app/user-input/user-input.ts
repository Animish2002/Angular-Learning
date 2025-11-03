import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-user-input',
  standalone: false,
  templateUrl: './user-input.html',
  styleUrl: './user-input.css',
})
export class UserInput {
  @Output() calculate = new EventEmitter<{initialInvestment:number ,
  annualInvestment:number,
  expectedReturn:number,
  duration:number }>();

  enteredInitialInvestment = '0';
  annualInvestment = '0';
  expectedReturn = '0';
  duration = '0';
  

  onSubmit() {
    this.calculate.emit({
      initialInvestment: +this.enteredInitialInvestment,
      annualInvestment: +this.annualInvestment,
      expectedReturn: +this.expectedReturn,
      duration: +this.duration,
    });
  }
}
