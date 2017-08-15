import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ExpenseProvider } from '../../providers/expense/expense';

@Component({
  selector: 'page-manage',
  templateUrl: 'manage.html',
})

export class ManagePage {

  expense = {
    transDate: new Date().toISOString(),
    transType: '',
    transDetail: '',
    transAmt: ''
  };
  item: any;

  constructor(public params: NavParams, public expenseProvider: ExpenseProvider, public navCtrl: NavController) {
    this.item = params.data.item;
    
    this.expense = {
      transDate: this.item ? this.item.transDate : new Date().toISOString(),
      transType: this.item ? this.item.transType : '',
      transDetail: this.item ? this.item.transDetail : '',
      transAmt: this.item ? this.item.transAmt : ''
    };
  }

  clrForm() {
    this.expense = {
      transDate: new Date().toISOString(),
      transType: '',
      transDetail: '',
      transAmt: ''
    };
  }

  save() {
    if (this.item) {
      this.expenseProvider.updateTransactions(this.item.$key, this.expense);
      this.navCtrl.pop();
    } else {
      this.expenseProvider.addTransactions(this.expense);
    }

    this.clrForm();
    
  }

  

  validForm() {
    return (this.expense.transType.trim() != '' && this.expense.transDetail.trim() != '' && this.expense.transAmt.trim() != '')
  }
}

