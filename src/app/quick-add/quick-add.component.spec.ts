import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  ReactiveFormsModule
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

import { QuickAddComponent } from './quick-add.component';

describe('QuickAddComponent', () => {
  let component: QuickAddComponent;
  let fixture: ComponentFixture<QuickAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        BrowserAnimationsModule,
        ReactiveFormsModule,
        MatInputModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatIconModule,
        MatDividerModule,
        MatTableModule,
        MatButtonModule
      ],
      declarations: [ QuickAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuickAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
