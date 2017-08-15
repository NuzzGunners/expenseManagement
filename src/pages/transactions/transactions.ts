import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { ExpenseProvider } from '../../providers/expense/expense';
import { ManagePage } from '../manage/manage';

@Component({
  selector: 'page-transactions',
  templateUrl: 'transactions.html',
})
export class TransactionsPage {

  tab2Root = ManagePage;

  list1 = [];
  list2 = [];
  list3 = [];
  expenses = [];

  constructor(public expenseProvider: ExpenseProvider, public alertCtrl: AlertController, public navCtrl: NavController) {

    this.getListTransactions();

    /*this.list1 = [
      { id: 1, name: "test1" },
      { id: 2, name: "test2" },
      { id: 3, name: "test3" },
      { id: 4, name: "test4" }
    ];

    this.list2 = [
      { id: 1, name: "test1", shelving: "OK" },
      { id: 3, name: "test3", shelving: "OK" },
      { id: 5, name: "test5", shelving: "OK" },
      { id: 4, name: "test4", shelving: "OK" }
    ];

     for (let a1 of this.list1){
       let test = this.list2.filter(x => x.id == a1.id);
       if (test) {
        this.list3.push({
          id: a1.id,
          name: a1.name,
          shelving: "OK"
        });
       } else {
         this.list3.push({
          id: a1.id,
          name: a1.name,
          shelving: ""
        });
       }
     }

     console.log(this.list3);*/
  }

  getListTransactions() {
    this.expenseProvider.getListTransactions()
      .subscribe(x => {
        this.expenses = x;
      });
  }

  itemSelected(item) {
    this.navCtrl.push(ManagePage, { item: item });
  }

  remove(item) {
    let alert = this.alertCtrl.create({
      title: 'ยืนยันการลบรายการนี้ ?',
      message: '',
      buttons: [
        {
          text: 'ยกเลิก',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'ลบ',
          handler: () => {
            this.expenseProvider.removeTransactions(item);
          }
        }
      ]
    });
    alert.present();
  }
}