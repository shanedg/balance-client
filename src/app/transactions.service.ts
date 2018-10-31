import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Transaction } from './transaction';

const TRANSACTION_DATA: Transaction[] = [
  {id: 1, description: 'Hydrogen', amount: 100.00, date: new Date().toLocaleDateString()},
  {id: 2, description: 'Helium', amount: -90.5, date: new Date().toLocaleDateString()},
];

@Injectable({
  providedIn: 'root'
})
export class TransactionsService {

  constructor() { }

  // TODO: strategy around adding transactions via service
  // and what triggers update to ui.

  getTransactions(): Observable<Transaction[]> {
    // TODO: connect this to persistent storage
    return of(TRANSACTION_DATA);
  }
}
