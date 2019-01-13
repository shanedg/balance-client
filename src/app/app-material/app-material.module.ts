import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatInputModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatIconModule,
  MatDividerModule,
  MatTableModule,
  MatButtonModule,
} from '@angular/material';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatIconModule,
    MatDividerModule,
    MatTableModule,
    MatButtonModule,
  ],
  exports: [
    BrowserAnimationsModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatIconModule,
    MatDividerModule,
    MatTableModule,
    MatButtonModule,
  ],
  providers: [MatNativeDateModule],
})
export class AppMaterialModule {}
