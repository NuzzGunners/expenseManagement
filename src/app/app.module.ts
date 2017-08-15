import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { CloudSettings, CloudModule } from '@ionic/cloud-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { MyApp } from './app.component';

import { HomePage } from '../pages/home/home';
import { ManagePage } from '../pages/manage/manage';
import { TransactionsPage } from '../pages/transactions/transactions';
import { StatisticsPage } from '../pages/statistics/statistics';
import { TabsPage } from '../pages/tabs/tabs';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabase } from 'angularfire2/database';
import { GroupsPipe } from '../pipes/groups/groups';
import { ExpenseProvider } from '../providers/expense/expense';

export const firebase = {
  apiKey: 'AIzaSyBtz_ra2U8i2h5_sKmZ4J6IPeYzLnCC1mw',
  authDomain: '',
  databaseURL: 'https://expensemanagement-77dba.firebaseio.com/',
  projectId: '',
  storageBucket: '',
  messagingSenderId: ''
};

const cloudSettings: CloudSettings = {
  'core': {
    'app_id': '4d5fce39'
  }
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ManagePage,
    TransactionsPage,
    StatisticsPage,
    TabsPage,
    GroupsPipe
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebase),
    CloudModule.forRoot(cloudSettings)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ManagePage,
    TransactionsPage,
    StatisticsPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AngularFireDatabase,
    ExpenseProvider
  ]
})
export class AppModule {}
