import {
  Component,
  OnInit,
  Output,
  EventEmitter
} from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  NgForm
} from '@angular/forms';
import { MatTableDataSource } from '@angular/material';

import { Transaction } from '../transaction';

@Component({
  selector: 'app-quick-add',
  templateUrl: './quick-add.component.html',
  styleUrls: ['./quick-add.component.css']
})
export class QuickAddComponent implements OnInit {

  // Form controls
  newTransaction = new FormGroup({
    name: new FormControl(null, {
      validators: [
      ]
    }),
    amount: new FormControl(null, {
      validators: [
        Validators.pattern(/^-?\d+(\.?\d{1,2})?$/)
      ]
    }),
    details: new FormControl(null, {
      validators: [
      ]
    }),
    due: new FormControl(null, {
      validators: [
        // Validators.pattern(/^\d+\/\d+\/\d+$/)
      ]
    }),
    scheduled: new FormControl(null, {
      validators: [
        // Validators.pattern(/^\d+\/\d+\/\d+$/)
      ]
    }),
    effective: new FormControl(null, {
      validators: [
        // Validators.pattern(/^\d+\/\d+\/\d+$/)
      ]
    }),
    fromAccount: new FormControl(null, {
      validators: [
      ]
    }),
    toAccount: new FormControl(null, {
      validators: [
      ]
    }),
    bucket: new FormControl(null, {
      validators: [
      ]
    }),
  });

  initialAddValues = [
    {
      id: null,
      name: null,
      amount: null,
      details: null,
      due: null,
      scheduled: null,
      effective: null,
      fromAccount: null,
      toAccount: null,
      bucket: null,
    },
  ];
  quickAddTableSource = new MatTableDataSource(this.initialAddValues);

  quickAddColumns: string[] = [
    // 'id',
    'name',
    'amount',
    'details',
    'due',
    'scheduled',
    'effective',
    'fromAccount',
    'toAccount',
    'bucket',
  ];

  constructor() { }

  ngOnInit() {
  }

  // Send transaction submissions up and out to parent.
  @Output() transactionAddedEvent = new EventEmitter<Transaction>();

  /*
   * Transaction details form submit.
   */
  onSubmit(formEl: NgForm) {
    if (!this.newTransaction.invalid) {
      
      const transaction = {
        id: -1, // from cms
        name: this.newTransaction.value.name || null,
        amount: this.newTransaction.value.amount || null,
        details: this.newTransaction.value.details || null,
        due: this.newTransaction.value.due ? this.newTransaction.value.due.toLocaleDateString() : null,
        scheduled: this.newTransaction.value.scheduled ? this.newTransaction.value.scheduled.toLocaleDateString() : null,
        effective: this.newTransaction.value.effective ? this.newTransaction.value.effective.toLocaleDateString() : null,
        fromAccount: this.newTransaction.value.fromAccount || null,
        toAccount: this.newTransaction.value.toAccount || null,
        bucket: this.newTransaction.value.bucket || null
      };
      this.transactionAddedEvent.emit(transaction);
      
      // TODO: the call to reset() is likely superfluous, I think only need resetForm()
      this.newTransaction.reset();
      formEl.resetForm();
    }
  }

}
