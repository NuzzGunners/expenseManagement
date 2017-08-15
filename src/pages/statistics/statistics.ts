import { Component } from '@angular/core';
import { ExpenseProvider } from '../../providers/expense/expense';
import * as _ from 'lodash';

@Component({
  selector: 'page-statistics',
  templateUrl: 'statistics.html',
})

export class StatisticsPage {

  income = 0;
  outcome = 0;
  month = [];
  data = [];

  constructor(public expenseProvider: ExpenseProvider) {
    this.getListTransactions();
  }

  getListTransactions() {
    this.expenseProvider.getListTransactions()
      .subscribe(x => {

        this.month = [];
        this.data = [];

        for (let item of x) {
          if (!this.checkItemFromArray(this.month, 'month', (<string>item.transDate).substring(0, 7))) {
            this.month.push({ month: (<string>item.transDate).substring(0, 7) });
          }
        }

        for (let m of this.month) {

          this.income = 0;
          this.outcome = 0;

          for (let item of x) {
            
            if (m.month == (<string>item.transDate).substring(0, 7)) {
              if (+item.transType === 1) {
                this.income += +item.transAmt;
              } else {
                this.outcome += +item.transAmt;
              }
            }

          }
          
          this.data.push(
            { month: m.month, income: this.income, outcome: this.outcome }
          )
        }
        
      });
  }

  checkItemFromArray<T>(array: Array<T>, property: string, value: any) {
    return _.some(array, [property, value]);
  }
}