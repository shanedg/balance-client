import { TestBed, async } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  ReactiveFormsModule,
  // FormsModule
} from '@angular/forms';
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

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      // app libraries need to be imported
      imports: [
        BrowserAnimationsModule,
        ReactiveFormsModule,
        // FormsModule,
        MatInputModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatIconModule,
        MatDividerModule,
        MatTableModule,
        MatButtonModule
      ],
      // app components need to be declared
      declarations: [
        AppComponent,
        QuickAddComponent,
        TransactionsComponent
      ],
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'balance'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('balance');
  }));
  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('balance');
  }));
});
