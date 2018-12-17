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

import {
  Account,
  Bucket,
  PendingTransaction,
  Transaction,
} from '../app.types';

import { EditRowComponent } from '../edit-row/edit-row.component';

@Component({
  selector: 'app-quick-add',
  templateUrl: './quick-add.component.html',
  styleUrls: ['./quick-add.component.css']
})
export class QuickAddComponent implements OnInit {

  // Receive accounts list from parent.
  @Input() accounts: Account[];

  // Receive buckets list from parent.
  @Input() buckets: Bucket[];

  // Pass transaction submissions thru to parent.
  @Output() transactionAddedEvent = new EventEmitter<PendingTransaction>();

  // Form controls
  newTransaction = new FormGroup({
    name: new FormControl(null, {
      validators: []
    }),
    amount: new FormControl(null, {
      validators: [
        Validators.pattern(/^-?\d+(\.?\d{1,2})?$/)
      ]
    }),
    details: new FormControl(null, {
      validators: []
    }),
    due: new FormControl(null, {
      validators: []
    }),
    scheduled: new FormControl(null, {
      validators: []
    }),
    effective: new FormControl(null, {
      validators: []
    }),
    fromAccount: new FormControl(null, {
      validators: []
    }),
    toAccount: new FormControl(null, {
      validators: []
    }),
    bucket: new FormControl(null, {
      validators: []
    }),
  });

  initialAddValues = [
    {
      // id: null,
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

  ngOnInit() { }

  /*
   * Receive new transaction from `transactionEditEvent`,
   * pass thru to parent.
   */
  receiveEditTransaction($event) {
    this.transactionAddedEvent.emit($event);
  }
}
