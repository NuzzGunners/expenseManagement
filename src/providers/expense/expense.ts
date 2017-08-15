import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';

@Injectable()
export class ExpenseProvider {

  db: FirebaseListObservable<any[]>;
  baseUrl: string;

  constructor(private context: AngularFireDatabase) {
    this.baseUrl = 'https://expensemanagement-77dba.firebaseio.com/';
    this.db = this.context.list(this.baseUrl, {
      query: {
        orderByChild: 'transDate'
      }
    });

  }

  getListTransactions() {
    return this.db;
  }

  addTransactions(expense) {
    this.db.push(expense).catch(this.handleError);
  }

  updateTransactions(id, expense) {
    this.db.update(id, expense).catch(this.handleError);
  }

  removeTransactions(expense) {
    this.db.remove(expense).catch(this.handleError);
  }

  handleError(error: any) {
    var applicationError = error.headers.get('Application-Error');
    var serverError = error.json();
    var modelStateErrors: string = '';

    if (!serverError.type) {
      console.log(serverError);
      for (var key in serverError) {
        if (serverError[key])
          modelStateErrors += serverError[key] + '\n';
      }
    }

    modelStateErrors = modelStateErrors = '' ? null : modelStateErrors;

    return Observable.throw(applicationError || modelStateErrors || 'Server error');
  }

}