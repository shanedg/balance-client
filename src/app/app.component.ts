import { Component } from '@angular/core';
import { Transaction } from './transaction';

const TRANSACTION_DATA: Transaction[] = [
  {id: 1, description: 'Hydrogen', value: 1.0079, date: new Date().toLocaleDateString()},
  {id: 2, description: 'Helium', value: 4.0026, date: new Date().toLocaleDateString()},
  // {id: 3, description: 'Lithium', value: 6.941, date: new Date().toLocaleDateString()},
  // {id: 4, description: 'Beryllium', value: 9.0122, date: new Date().toLocaleDateString()},
  // {id: 5, description: 'Boron', value: 10.811, date: new Date().toLocaleDateString()},
  // {id: 6, description: 'Carbon', value: 12.0107, date: new Date().toLocaleDateString()},
  // {id: 7, description: 'Nitrogen', value: 14.0067, date: new Date().toLocaleDateString()},
  // {id: 8, description: 'Oxygen', value: 15.9994, date: new Date().toLocaleDateString()},
  // {id: 9, description: 'Fluorine', value: 18.9984, date: new Date().toLocaleDateString()},
  // {id: 10, description: 'Neon', value: 20.1797, date: new Date().toLocaleDateString()},
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'balance';
  // TODO: connect this to persistent storage
  transactions:Transaction[] = [].concat(TRANSACTION_DATA);

  receiveNewTransaction($event) {
    /*
     * Treat  `this.transactions` as immutable so that this change
     * triggers `ngOnChanges` in children that receive it.
     */
    this.transactions = this.transactions.concat($event);
  }
}
