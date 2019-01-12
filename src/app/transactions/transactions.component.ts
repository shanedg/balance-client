import {
  Component,
  EventEmitter,
  OnChanges,
  Output,
  Input,
  SimpleChanges,
  OnInit,
} from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { FormGroup, FormControl, Validators, NgForm } from '@angular/forms';

import { EditRowComponent } from '../edit-row/edit-row.component';
import { Account, Bucket, Transaction } from '../app.types';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.css'],
})
export class TransactionsComponent implements OnChanges, OnInit {
  // Receive accounts list from parent.
  @Input() accounts: Account[];

  // Receive buckets list from parent.
  @Input() buckets: Bucket[];

  // Transaction data to display, fetched in parent.
  @Input() transactions: Transaction[];

  // Send transaction submissions up and out to parent.
  @Output() transactionUpdatedEvent = new EventEmitter<Transaction>();

  transactionTableSource = new MatTableDataSource(this.transactions);
  transactionsColumns: string[] = [
    'id',
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
  singletonTableSource = new MatTableDataSource(this.initialAddValues);
  singletonColumns: string[] = [
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

  // Form controls
  transactionsFormGroup = new FormGroup({
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

  constructor() {}

  ngOnInit() {}

  ngOnChanges(changes: SimpleChanges) {
    this.transactionTableSource.data = this.transactions;
  }

  onRowClick(rowData: any) {
    console.log('row click:', rowData);
    const updatedRow = rowData;
    updatedRow.details = rowData.details + '...updated!';

    this.transactionUpdatedEvent.emit(updatedRow);
  }

  onCellClick(cellData: any) {
    console.log('cell click:', cellData);
  }

  /*
   * Receive new transaction from `transactionEditEvent`,
   * pass thru to parent.
   */
  receiveEditTransaction($event) {
    console.log('editing:', $event);
    this.transactionUpdatedEvent.emit($event);
  }
}
