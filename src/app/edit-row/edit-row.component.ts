import {
  Component,
  Input,
  OnInit,
  Output,
  EventEmitter,
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

@Component({
  selector: 'app-edit-row',
  templateUrl: './edit-row.component.html',
  styleUrls: ['./edit-row.component.css']
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

  // Send transaction submissions up and out to parent.
  @Output() transactionEditEvent = new EventEmitter<PendingTransaction>();

  constructor() { }

  ngOnInit() {
  }

  /*
   * Transaction details form submit.
   */
  onSubmit(formEl: NgForm) {
    console.log('formEl:', formEl);
    if (!this.editForm.invalid) {

      const transaction = {
        // id: -1, // from cms, treat this -1 as a sentinel value
        name: this.editForm.value.name || null,
        amount: this.editForm.value.amount || null,
        details: this.editForm.value.details || null,
        due: this.editForm.value.due ? this.editForm.value.due.toLocaleDateString() : null,
        scheduled: this.editForm.value.scheduled ? this.editForm.value.scheduled.toLocaleDateString() : null,
        effective: this.editForm.value.effective ? this.editForm.value.effective.toLocaleDateString() : null,
        fromAccount: this.editForm.value.fromAccount ? this.getAccount(this.editForm.value.fromAccount) : null,
        toAccount: this.editForm.value.toAccount ? this.getAccount(this.editForm.value.toAccount) : null,
        bucket: this.editForm.value.bucket ? this.getBucket(this.editForm.value.bucket) : null,
      };

      this.transactionEditEvent.emit(transaction);

      // TODO: the call to reset() is likely superfluous, I think only need resetForm()
      this.editForm.reset();
      formEl.resetForm();
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
