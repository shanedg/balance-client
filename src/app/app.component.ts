import { Component, OnInit } from '@angular/core';
import { TransactionsService } from './transactions.service';
import { Transaction } from './transaction';
import { Account } from './account';
import { AccountsService } from './accounts.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'balance';
  transactions:Transaction[];
  accounts:Account[];

  constructor(private transactionsService: TransactionsService, private accountsService: AccountsService) { }

  ngOnInit() {
    this.transactionsService.getTransactions()
      .subscribe(transactions => {
        this.transactions = [].concat(transactions);
      });
    this.accountsService.getAccounts()
      .subscribe(accounts => {
        this.accounts = [].concat(accounts);
      });
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
