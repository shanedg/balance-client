import { Component, OnInit } from '@angular/core';
import { TransactionsService } from './transactions.service';
import { Transaction } from './transaction';
import { Account } from './account';
import { AccountsService } from './accounts.service';
import { BucketsService } from './buckets.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'balance';
  transactions: Transaction[];
  accounts: Account[];
  // TODO: buckets ts type once we figure out what buckets needs/does
  buckets: any[];

  constructor(private transactionsService: TransactionsService,
    private accountsService: AccountsService,
    private bucketsService: BucketsService) { }

  ngOnInit() {
    // get all transactions on init
    this.transactionsService.getTransactions()
      .subscribe(transactions => {
        this.transactions = [].concat(transactions);
      });

    // get all accounts
    this.accountsService.getAccounts()
      .subscribe(accounts => {
        this.accounts = [].concat(accounts);
      });

    // get all buckets
    this.bucketsService.getBuckets()
      .subscribe(buckets => {
        this.buckets = [].concat(buckets);
      });
  }

  /*
   * Pass new transaction object to service and subscribe
   * to result.
   */
  receiveNewTransaction($event) {
    this.transactionsService.createTransaction($event)
      .subscribe(newTrans => {
        /*
         * Treat  `this.transactions` as immutable so that this change
         * triggers `ngOnChanges` in children that receive it.
         */
        this.transactions = this.transactions.concat(newTrans);
      });
  }
}
