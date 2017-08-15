import { Component } from '@angular/core';
import { HomePage } from '../home/home';
import { ManagePage } from '../manage/manage';
import { TransactionsPage } from '../transactions/transactions';
import { StatisticsPage } from '../statistics/statistics';

@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html'
})

export class TabsPage {

  tab1Root = HomePage;
  tab2Root = ManagePage;
  tab3Root = TransactionsPage;
  tab4Root = StatisticsPage;

  constructor() { }

}
