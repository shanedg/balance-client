import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppMaterialModule } from './app-material/app-material.module';

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
    AppMaterialModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
