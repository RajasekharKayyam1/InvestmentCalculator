import { Component } from '@angular/core';
import { calculateInvestmentResults, investmentresults } from '../service/investment-results';
import { Input } from '@angular/core';

@Component({
  selector: 'app-investment-results',
  standalone: true,
  imports: [],
  templateUrl: './investment-results.component.html',
  styleUrl: './investment-results.component.css'
})
export class InvestmentResultsComponent {
  results=investmentresults;
}
