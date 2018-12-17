import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {
  ReactiveFormsModule
} from '@angular/forms';
import {
  HttpClientModule
} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatInputModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatIconModule,
  MatDividerModule,
  MatTableModule,
  MatButtonModule
} from '@angular/material';

import { AppComponent } from './app.component';
import { QuickAddComponent } from './quick-add/quick-add.component';
import { TransactionsComponent } from './transactions/transactions.component';
import { EditRowComponent } from './edit-row/edit-row.component';

@NgModule({
  declarations: [
    AppComponent,
    QuickAddComponent,
    TransactionsComponent,
    EditRowComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatIconModule,
    MatDividerModule,
    MatTableModule,
    MatButtonModule,
  ],
  providers: [
    MatNativeDateModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
