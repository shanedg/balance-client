import { Component, OnInit } from '@angular/core';
import { TransactionsService } from './transactions.service';
import { Transaction } from './transaction';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'balance';
  transactions:Transaction[];

  constructor(private transactionsService: TransactionsService) { }

  ngOnInit() {
    this.transactionsService.getTransactions()
      .subscribe(transactions => this.transactions = [].concat(transactions));
  }

  // TODO: strategy around adding transactions via service
  // and what triggers update to ui.
  receiveNewTransaction($event) {
    /*
     * Treat  `this.transactions` as immutable so that this change
     * triggers `ngOnChanges` in children that receive it.
     */
    this.transactions = this.transactions.concat($event);
  }
}
