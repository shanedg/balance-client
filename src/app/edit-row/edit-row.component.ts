import { Component, Input, OnInit, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators, NgForm } from '@angular/forms';
import { MatTableDataSource } from '@angular/material';
import { Account, Bucket, PendingTransaction, Transaction } from '../app.types';

@Component({
  selector: 'app-edit-row',
  templateUrl: './edit-row.component.html',
  styleUrls: ['./edit-row.component.css'],
})
export class EditRowComponent implements OnInit {
  /**
   * List of Accounts which the user may select from.
   */
  @Input() accounts: Account[];

  /**
   * List of Buckets which the user may select from.
   */
  @Input() buckets: Bucket[];

  /**
   * List of columns for display.
   */
  @Input() editColumns: string[];

  /**
   * [TODO] Form group...yo wait should this be an input at all? This might be a total change to the current architecture.
   */
  @Input() editForm: FormGroup;

  /**
   * [TODO] Transactions data, table data source.
   */
  @Input() editTableSource: MatTableDataSource<any>;

  constructor() {}

  ngOnInit() {}
}
