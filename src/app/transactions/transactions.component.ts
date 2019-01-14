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
import { Account, Bucket, Transaction, PendingTransaction } from '../app.types';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.css'],
})
export class TransactionsComponent implements OnChanges, OnInit {
  /**
   * List of Accounts which the user may select from.
   */
  @Input() accounts: Account[];

  /**
   * List of Buckets which the user may select from.
   */
  @Input() buckets: Bucket[];

  /**
   * List of Transactions.
   */
  @Input() transactions: Transaction[];

  /**
   * [TODO] Emit event with details of updated transaction.
   */
  @Output() public transactionUpdatedEvent: EventEmitter<
    Transaction
  > = new EventEmitter<Transaction>();

  /**
   * Data source for transactions table.
   */
  transactionTableSource = new MatTableDataSource(this.transactions);

  /**
   * Transactions table columns.
   */
  transactionsColumns: string[] = [
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

  /**
   * [TODO] the below represent an approach to edit-in-place which figured maybe we could reuse a single instance of EditRowComponent for whichever transaction row is "active" for editing...still a viable idea, performance would suffer pretty fast in an implementation with an EditRowComponent for every row, active or not...need to flesh out.
   * */
  // private initialAddValues = [
  //   {
  //     name: null,
  //     amount: null,
  //     details: null,
  //     due: null,
  //     scheduled: null,
  //     effective: null,
  //     fromAccount: null,
  //     toAccount: null,
  //     bucket: null,
  //   },
  // ];

  // singletonTableSource: MatTableDataSource<
  //   PendingTransaction
  // > = new MatTableDataSource(this.initialAddValues);

  // singletonColumns: string[] = [
  //   'name',
  //   'amount',
  //   'details',
  //   'due',
  //   'scheduled',
  //   'effective',
  //   'fromAccount',
  //   'toAccount',
  //   'bucket',
  // ];

  // transactionsFormGroup = new FormGroup({
  //   name: new FormControl(null, {
  //     validators: [],
  //   }),
  //   amount: new FormControl(null, {
  //     validators: [Validators.pattern(/^-?\d+(\.?\d{1,2})?$/)],
  //   }),
  //   details: new FormControl(null, {
  //     validators: [],
  //   }),
  //   due: new FormControl(null, {
  //     validators: [],
  //   }),
  //   scheduled: new FormControl(null, {
  //     validators: [],
  //   }),
  //   effective: new FormControl(null, {
  //     validators: [],
  //   }),
  //   fromAccount: new FormControl(null, {
  //     validators: [],
  //   }),
  //   toAccount: new FormControl(null, {
  //     validators: [],
  //   }),
  //   bucket: new FormControl(null, {
  //     validators: [],
  //   }),
  // });

  constructor() {}

  ngOnInit() {}

  ngOnChanges(changes: SimpleChanges) {
    this.transactionTableSource.data = this.transactions;
  }

  /**
   * [TODO] implement click on row.
   */
  // onRowClick(rowData: any) {
  //   console.log('row click:', rowData);
  //   const updatedRow = rowData;
  //   updatedRow.details = rowData.details + '...updated!';

  //   this.transactionUpdatedEvent.emit(updatedRow);
  // }

  /**
   * [TODO] on cell click, enable that data for editing?
   * @param {any} cellData Table data from clicked cell.
   */
  onCellClick(cellData: any) {
    console.log('cell click:', cellData);
  }

  /**
   * [TODO] implement the rest of this
   * @param {Transaction} $event
   */
  receiveEditTransaction($event) {
    console.log('editing:', $event);
    this.transactionUpdatedEvent.emit($event);
  }
}
