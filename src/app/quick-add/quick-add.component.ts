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
        Validators.required
      ]
    }),
    amount: new FormControl(null, {
      validators: [
        Validators.required,
        Validators.pattern(/^-?\d+(\.?\d{1,2})?$/)
      ]
    }),
    details: new FormControl(null, {
      validators: [
        Validators.required
      ]
    }),
    due: new FormControl(null, {
      validators: [
        Validators.required
      ]
    }),
    scheduled: new FormControl(null, {
      validators: [
        Validators.required
      ]
    }),
    effective: new FormControl(null, {
      validators: [
        Validators.required
      ]
    })
  });

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
        // TODO: settle on transaction id convention
        id: 0,
        name: this.newTransaction.value.name,
        amount: this.newTransaction.value.amount,
        details: this.newTransaction.value.details,
        due: this.newTransaction.value.due.toLocaleDateString(),
        scheduled: this.newTransaction.value.scheduled.toLocaleDateString(),
        effective: this.newTransaction.value.effective.toLocaleDateString(),
        fromAccount: null,
        toAccount: null,
        bucket: null
      };
      this.transactionAddedEvent.emit(transaction);
      
      // TODO: the call to reset() is superfluous, I think only need resetForm()
      this.newTransaction.reset();
      formEl.resetForm();
    }
  }

}
