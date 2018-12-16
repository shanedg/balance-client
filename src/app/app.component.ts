import { Component, OnInit } from '@angular/core';
import { Transaction } from './transaction';
import { Account } from './account';

import { EndpointService } from './endpoint.service';

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

  constructor(private endpointService: EndpointService) { }

  ngOnInit() {
    // get all transactions
    this.endpointService.readAll('/transactions/')
      .subscribe(transactions => {
        this.transactions = [].concat(transactions);
      });

    // get all accounts
    this.endpointService.readAll('/accounts/')
      .subscribe(transactions => {
        this.transactions = [].concat(transactions);
      });

    // get all buckets
    this.endpointService.readAll('/buckets/')
      .subscribe(transactions => {
        this.transactions = [].concat(transactions);
      });
  }

  /*
   * Pass new transaction object to service and subscribe
   * to result.
   */
  receiveNewTransaction($event) {
    this.endpointService.create('/transactions/', $event)
      .subscribe(newTrans => {
        /*
         * Treat  `this.transactions` as immutable so that this change
         * triggers `ngOnChanges` in children that receive it.
         */
        this.transactions = this.transactions.concat(newTrans);
      });
  }
}
