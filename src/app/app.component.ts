import { Component, OnInit } from '@angular/core';

import {
  Account,
  Bucket,
  PendingTransaction,
  Transaction,
} from './app.types';

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
  buckets: Bucket[];

  constructor(private endpointService: EndpointService) { }

  ngOnInit() {
    // get all transactions
    this.endpointService.readAll('/transactions/')
      .subscribe(transactions => {
        this.transactions = [].concat(transactions);
      });

    // get all accounts
    this.endpointService.readAll('/accounts/')
      .subscribe(accounts => {
        this.accounts = [].concat(accounts);
      });

    // get all buckets
    this.endpointService.readAll('/buckets/')
      .subscribe(buckets => {
        this.buckets = [].concat(buckets);
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

  /*
   * Pass updated transaction object to service and subscribe
   * to result.
   */
  receiveUpdatedTransaction($event) {
    this.endpointService.update('/transactions/', $event.id, $event)
      .subscribe(newTrans => {
        /*
         * Treat `this.transactions` as immutable so that this change
         * triggers `ngOnChanges` in children that receive it.
         */

        let priorIndex;
        let i;
        const limit = this.transactions.length;
        for (i = 0; i < limit; i++) {
          if (this.transactions[i].id === $event.id) {
            priorIndex = i;
            break;
          }
        }

        if (priorIndex === 0) {
          const after = this.transactions.slice(1);
          this.transactions = [$event].concat(after);
        } else if (priorIndex === (limit - 1)) {
          const before = this.transactions.slice(0, (limit - 1));
          this.transactions = before.concat($event);
        } else {
          const before = this.transactions.slice(0, priorIndex);
          const after = this.transactions.slice((priorIndex + 1));
          this.transactions = before.concat($event).concat(after);
        }
      });
  }
}
