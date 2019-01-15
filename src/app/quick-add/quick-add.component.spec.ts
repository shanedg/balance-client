import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {
  ReactiveFormsModule,
  // FormGroup,
  // FormControl,
  // Validators,
} from '@angular/forms';

import { AppMaterialModule } from '../app-material/app-material.module';

import { QuickAddComponent } from './quick-add.component';
import { EditRowComponent } from '../edit-row/edit-row.component';

describe('QuickAddComponent', () => {
  let component: QuickAddComponent;
  let fixture: ComponentFixture<QuickAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      // import Modules!
      imports: [ReactiveFormsModule, AppMaterialModule],
      // declare Components!
      declarations: [QuickAddComponent, EditRowComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuickAddComponent);
    component = fixture.componentInstance;

    // component.accounts = [
    //   {
    //     id: 1,
    //     name: 'chrome-checking',
    //     details: 'chrome checking account',
    //     type: null,
    //     initialBalance: 1100,
    //   },
    //   {
    //     id: 2,
    //     name: 'chrome-savings',
    //     details: 'savings account @ chrome',
    //     type: null,
    //     initialBalance: 4500,
    //   },
    // ];

    // component.buckets = [
    //   {
    //     id: 1,
    //     name: 'necessary',
    //   },
    //   {
    //     id: 2,
    //     name: 'unnecessary',
    //   },
    //   {
    //     id: 3,
    //     name: 'ah fuck it, right?',
    //   },
    // ];

    // component.newTransaction = new FormGroup({
    //   name: new FormControl(null, {
    //     validators: [],
    //   }),
    //   amount: new FormControl(null, {
    //     validators: [Validators.pattern(/^-?\d+(\.?\d{1,2})?$/)],
    //   }),
    //   details: new FormControl(null, {
    //     validators: [],
    //   }),
    //   due: new FormControl(null, {
    //     validators: [],
    //   }),
    //   scheduled: new FormControl(null, {
    //     validators: [],
    //   }),
    //   effective: new FormControl(null, {
    //     validators: [],
    //   }),
    //   fromAccount: new FormControl(null, {
    //     validators: [],
    //   }),
    //   toAccount: new FormControl(null, {
    //     validators: [],
    //   }),
    //   bucket: new FormControl(null, {
    //     validators: [],
    //   }),
    // });

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
