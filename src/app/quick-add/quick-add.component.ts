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
    value: new FormControl(null, {
      validators: [
        Validators.required,
        Validators.pattern(/^-?\d+(\.?\d{1,2})?$/)
      ]
    }),
    description: new FormControl(null, {
      validators: [
        Validators.required
      ]
    }),
    date: new FormControl(null, {
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
        value: this.newTransaction.value.value,
        description: this.newTransaction.value.description,
        date: this.newTransaction.value.date.toLocaleDateString()
      };
      this.transactionAddedEvent.emit(transaction);
      
      // TODO: the call to reset() is superfluous, I think only need resetForm()
      this.newTransaction.reset();
      formEl.resetForm();
    }
  }

}
