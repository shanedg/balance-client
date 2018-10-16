import {
  Component,
  OnInit,
  Output,
  EventEmitter
} from '@angular/core';
import {
  FormGroup,
  FormControl
} from '@angular/forms';
import { Transaction } from '../transaction';

@Component({
  selector: 'app-quick-add',
  templateUrl: './quick-add.component.html',
  styleUrls: ['./quick-add.component.css']
})
export class QuickAddComponent implements OnInit {

  // Form controls
  newTransaction = new FormGroup({
    value: new FormControl(''),
    description: new FormControl(''),
    date: new FormControl('')
  });

  constructor() { }

  ngOnInit() {
  }

  // Send expense submissions up and out to parent.
  @Output() transactionAddedEvent = new EventEmitter<Transaction>();

  /*
   * Expense details form submit.
   */
  onSubmit() {
    const transaction = {
      // TODO: settle on transaction id convention
      id: 0,
      value: this.newTransaction.value.value,
      description: this.newTransaction.value.description,
      date: this.newTransaction.value.date.toLocaleDateString()
    };
    this.transactionAddedEvent.emit(transaction);
  }

}
