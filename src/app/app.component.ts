import { Component, OnInit } from '@angular/core';

import { Account, Bucket, PendingTransaction, Transaction } from './app.types';

import { EndpointService } from './endpoint.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  /**
   * App title.
   */
  title = 'balance';

  /**
   * App transaction data, array of Transactions retrieved from API via injected `EndpointService`.
   */
  transactions: Transaction[];

  /**
   * App accounts data, array of Accounts retrieved from API via injected `EndpointService`.
   */
  accounts: Account[];

  /**
   * App buckets data, array of Buckets retrieved from API via injected `EndpointService`.
   */
  buckets: Bucket[];

  /**
   * @param endpointService Injected service for communicating with API endpoints.
   */
  constructor(private endpointService: EndpointService) {}

  /**
   * On init, fetch transactions, accounts, and buckets data from API.
   */
  ngOnInit() {
    this.endpointService.readAll('/transactions/').subscribe(transactions => {
      this.transactions = [].concat(transactions);
    });

    this.endpointService.readAll('/accounts/').subscribe(accounts => {
      this.accounts = [].concat(accounts);
    });

    this.endpointService.readAll('/buckets/').subscribe(buckets => {
      this.buckets = [].concat(buckets);
    });
  }

  /**
   * Pass new transaction to endpointService and subscribe to result.
   *
   * Important to treat `this.transactions` as immutable so that update triggers change detection correctly.
   * @param $event New transaction event.
   */
  receiveNewTransaction($event: Transaction) {
    this.endpointService
      .create('/transactions/', $event)
      .subscribe(newTransaction => {
        this.transactions = this.transactions.concat(newTransaction);
      });
  }

  /**
   * [WIP]
   * [TODO]
   *
   * Pass edited transaction to endpointService and subscribe to result.
   *
   * Important to treat `this.transactions` as immutable so that update triggers change detection correctly.
   * @param $event Updated transaction event.
   */
  receiveUpdatedTransaction($event: Transaction) {
    this.endpointService
      .update('/transactions/', $event.id, $event)
      .subscribe(updatedTransaction => {
        /*
         * Re-insert updated transaction at the correct location in
         * the transactions array...tho this only preserves the ordering
         * until the next client reload...might be unnecessary if client
         * just defaults to order transactions by `id`, since cms sends
         * in order of last modified...also an O(n) operation in the
         * worst case so if it can go, get rid of it
         */
        let priorIndex;
        let i;
        const limit = this.transactions.length;
        for (i = 0; i < limit; i++) {
          if (this.transactions[i].id === updatedTransaction.id) {
            priorIndex = i;
            break;
          }
        }

        if (priorIndex === 0) {
          const after = this.transactions.slice(1);
          this.transactions = [updatedTransaction].concat(after);
        } else if (priorIndex === limit - 1) {
          const before = this.transactions.slice(0, limit - 1);
          this.transactions = before.concat(updatedTransaction);
        } else {
          const before = this.transactions.slice(0, priorIndex);
          const after = this.transactions.slice(priorIndex + 1);
          this.transactions = before.concat(updatedTransaction).concat(after);
        }
      });
  }
}
