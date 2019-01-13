import {
  Component,
  Input,
  OnInit,
  Output,
  EventEmitter,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { FormGroup, FormControl, Validators, NgForm } from '@angular/forms';
import { MatTableDataSource } from '@angular/material';

import { Account, Bucket, PendingTransaction, Transaction } from '../app.types';

import { EditRowComponent } from '../edit-row/edit-row.component';

@Component({
  selector: 'app-quick-add',
  templateUrl: './quick-add.component.html',
  styleUrls: ['./quick-add.component.css'],
})
export class QuickAddComponent implements OnInit {
  // Receive accounts list from parent.
  @Input() accounts: Account[];

  // Receive buckets list from parent.
  @Input() buckets: Bucket[];

  // Pass transaction submissions thru to parent.
  @Output() transactionAddedEvent = new EventEmitter<PendingTransaction>();

  // Reference to form in `app-edit-row` child.
  @ViewChild(EditRowComponent) editRowComponent: EditRowComponent;

  // Form controls
  newTransaction = new FormGroup({
    name: new FormControl(null, {
      validators: [],
    }),
    amount: new FormControl(null, {
      validators: [Validators.pattern(/^-?\d+(\.?\d{1,2})?$/)],
    }),
    details: new FormControl(null, {
      validators: [],
    }),
    due: new FormControl(null, {
      validators: [],
    }),
    scheduled: new FormControl(null, {
      validators: [],
    }),
    effective: new FormControl(null, {
      validators: [],
    }),
    fromAccount: new FormControl(null, {
      validators: [],
    }),
    toAccount: new FormControl(null, {
      validators: [],
    }),
    bucket: new FormControl(null, {
      validators: [],
    }),
  });

  initialAddValues = [
    {
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

  constructor() {}

  ngOnInit() {}

  /*
   * Receive new transaction from `transactionEditEvent`,
   * pass thru to parent.
   */
  onAdd() {
    const formGroup = this.editRowComponent.editForm;
    const formValues = this.editRowComponent.editForm.value;

    // TODO: lol this form is never invalid tho
    if (!formGroup.invalid) {
      console.log('fresh transaction:', formValues);
      const freshTransaction = {
        name: formValues.name,
        amount: formValues.amount,
        details: formValues.details,
        due: formValues.due ? formValues.due.toLocaleDateString() : null,
        scheduled: formValues.scheduled
          ? formValues.scheduled.toLocaleDateString()
          : null,
        effective: formValues.effective
          ? formValues.effective.toLocaleDateString()
          : null,
        fromAccount: formValues.fromAccount
          ? this.getAccount(formValues.fromAccount)
          : null,
        toAccount: formValues.toAccount
          ? this.getAccount(formValues.toAccount)
          : null,
        bucket: formValues.bucket ? this.getBucket(formValues.bucket) : null,
      };

      this.transactionAddedEvent.emit(freshTransaction);
      formGroup.reset();
    }
  }

  /*
   * Map account name string back to Account-shaped object.
   */
  getAccount(name: string) {
    let account = null;
    this.accounts.forEach(item => {
      if (item.name === name) {
        account = item;
        return;
      }
    });
    return account;
  }

  /*
   * Map bucket name string back to Bucket-shaped object.
   */
  getBucket(name: string) {
    let bucket = null;
    this.buckets.forEach(item => {
      if (item.name === name) {
        bucket = item;
        return;
      }
    });
    return bucket;
  }
}
