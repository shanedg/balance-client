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
  // Accounts and Buckets list from parent.
  @Input() accounts: Account[];
  @Input() buckets: Bucket[];

  // Table columns from parent.
  @Input() editColumns: string[];

  // Receive form group from parent.
  @Input() editForm: FormGroup;

  // quickAddTableSource = new MatTableDataSource(this.values);
  @Input() editTableSource: MatTableDataSource<any>;

  constructor() {}

  ngOnInit() {}
}
