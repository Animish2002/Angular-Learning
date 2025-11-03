import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-investment-result',
  standalone: false,
  templateUrl: './investment-result.html',
  styleUrl: './investment-result.css',
})

export class InvestmentResult {
  @Input() results?: { year:number,
    interest:number,
    valueEndOfYear:number,
    annualInvestment:number,
    totalInterest:number,
    totalAmountInvested:number
  }[];
}
