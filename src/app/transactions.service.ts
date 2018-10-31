import { Injectable } from '@angular/core';
import { Transaction } from './transaction';

const TRANSACTION_DATA: Transaction[] = [
  {id: 1, description: 'Hydrogen', amount: 1.0079, date: new Date().toLocaleDateString()},
  {id: 2, description: 'Helium', amount: 4.0026, date: new Date().toLocaleDateString()},
  // {id: 3, description: 'Lithium', amount: 6.941, date: new Date().toLocaleDateString()},
  // {id: 4, description: 'Beryllium', amount: 9.0122, date: new Date().toLocaleDateString()},
  // {id: 5, description: 'Boron', amount: 10.811, date: new Date().toLocaleDateString()},
  // {id: 6, description: 'Carbon', amount: 12.0107, date: new Date().toLocaleDateString()},
  // {id: 7, description: 'Nitrogen', amount: 14.0067, date: new Date().toLocaleDateString()},
  // {id: 8, description: 'Oxygen', amount: 15.9994, date: new Date().toLocaleDateString()},
  // {id: 9, description: 'Fluorine', amount: 18.9984, date: new Date().toLocaleDateString()},
  // {id: 10, description: 'Neon', amount: 20.1797, date: new Date().toLocaleDateString()},
];

@Injectable({
  providedIn: 'root'
})
export class TransactionsService {

  constructor() { }

  // TODO: strategy around adding transactions via service
  // and what triggers update to ui.

  getTransactions(): Transaction[] {
    // TODO: connect this to persistent storage
    return TRANSACTION_DATA;
  }
}
