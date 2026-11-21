import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {calculateInvestmentResults} from '../service/investment-results';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {
 
 InitialInvestment:number | null=null;
  AnnualInvestment:number | null=null;
  Expectedreturn:number | null=null;
  Duration:number | null=null;
  onCalculate(){
    
    calculateInvestmentResults(
      this.AnnualInvestment!,
      this.Duration!,
      this.Expectedreturn!,
      this.InitialInvestment!,
      
    );

  }
 
  
}
