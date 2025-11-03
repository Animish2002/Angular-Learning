import { Component, Input, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.css'
})


export class App {
  resultData?:{
    year:number,
    interest:number,
    valueEndOfYear:number,
    annualInvestment:number,
    totalInterest:number,
    totalAmountInvested:number
  }[];


  calculateInvestmentResults(data: {initialInvestment:number ,
  annualInvestment:number,
  expectedReturn:number,
  duration:number }) {

  const {initialInvestment, annualInvestment, expectedReturn, duration}  = data;
  const annualData = [];
  let investmentValue = initialInvestment;

  for (let i = 0; i < duration; i++) {
    const year = i + 1;
    const interestEarnedInYear = investmentValue * (expectedReturn / 100);
    investmentValue += interestEarnedInYear + annualInvestment;
    const totalInterest =
      investmentValue - annualInvestment * year - initialInvestment;
    annualData.push({
      year: year,
      interest: interestEarnedInYear,
      valueEndOfYear: investmentValue,
      annualInvestment: annualInvestment,
      totalInterest: totalInterest,
      totalAmountInvested: initialInvestment + annualInvestment * year,
    });
  }

  this.resultData = annualData;
}

  
}
