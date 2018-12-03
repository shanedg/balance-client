import {
  Component,
  Input,
  OnInit,
  Output,
  EventEmitter, 
  SimpleChanges
} from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  NgForm
} from '@angular/forms';
import { MatTableDataSource } from '@angular/material';

import { Transaction } from '../transaction';
import { Account } from '../account';

@Component({
  selector: 'app-quick-add',
  templateUrl: './quick-add.component.html',
  styleUrls: ['./quick-add.component.css']
})
export class QuickAddComponent implements OnInit {

  // Receive accounts list from parent.
  @Input() accounts:Account[];

  // Receive buckets list from parent.
  @Input() buckets:Account[];

  // Send transaction submissions up and out to parent.
  @Output() transactionAddedEvent = new EventEmitter<Transaction>();

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
        // TODO: date validation didn't seem to work with this regexp
        // Validators.pattern(/^\d+\/\d+\/\d+$/)
      ]
    }),
    scheduled: new FormControl(null, {
      validators: [
        // TODO: date validation didn't seem to work with this regexp
        // Validators.pattern(/^\d+\/\d+\/\d+$/)
      ]
    }),
    effective: new FormControl(null, {
      validators: [
        // TODO: date validation didn't seem to work with this regexp
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
    // 'id', // from cms, we don't want to create this ourselves
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

  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges .. acccounts:', this.accounts);
    console.log('ngOnChanges .. buckets:', this.buckets);

  }

  /*
   * Transaction details form submit.
   */
  onSubmit(formEl: NgForm) {
    if (!this.newTransaction.invalid) {
      
      const transaction = {
        id: -1, // from cms, treat this -1 as a sentinel value
        name: this.newTransaction.value.name || null,
        amount: this.newTransaction.value.amount || null,
        details: this.newTransaction.value.details || null,
        due: this.newTransaction.value.due ? this.newTransaction.value.due.toLocaleDateString() : null,
        scheduled: this.newTransaction.value.scheduled ? this.newTransaction.value.scheduled.toLocaleDateString() : null,
        effective: this.newTransaction.value.effective ? this.newTransaction.value.effective.toLocaleDateString() : null,
        fromAccount: this.newTransaction.value.fromAccount ? this.getAccount(this.newTransaction.value.fromAccount) : null,
        toAccount: this.newTransaction.value.toAccount ? this.getAccount(this.newTransaction.value.toAccount) : null,
        bucket: this.newTransaction.value.bucket ? this.getBucket(this.newTransaction.value.bucket) : null,
      };
      
      console.log('emit transaction:', transaction);
      this.transactionAddedEvent.emit(transaction);
      
      // TODO: the call to reset() is likely superfluous, I think only need resetForm()
      this.newTransaction.reset();
      formEl.resetForm();
    }
  }

  /*
   * Map account name string back to Account-shaped object.
   */
  getAccount(name: string) {
    let account = null;
    this.accounts.forEach(item => {
      if (item.name == name) {
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
      if (item.name == name) {
        bucket = item;
        return;
      }
    });
    return bucket;
  }
}
