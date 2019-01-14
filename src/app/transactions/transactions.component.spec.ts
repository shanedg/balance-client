import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';

import { AppMaterialModule } from '../app-material/app-material.module';

import { TransactionsComponent } from './transactions.component';
import { EditRowComponent } from '../edit-row/edit-row.component';

describe('TransactionsComponent', () => {
  let component: TransactionsComponent;
  let fixture: ComponentFixture<TransactionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, AppMaterialModule],
      declarations: [TransactionsComponent, EditRowComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransactionsComponent);
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

    // component.transactionsColumns = [
    //   'name',
    //   'amount',
    //   'details',
    //   'due',
    //   'scheduled',
    //   'effective',
    //   'fromAccount',
    //   'toAccount',
    //   'bucket',
    // ];

    // component.transactions = [
    //   {
    //     id: 5,
    //     name: null,
    //     amount: null,
    //     details: null,
    //     due: null,
    //     scheduled: '2018-12-22T05:00:00.000Z',
    //     effective: null,
    //     fromAccount: null,
    //     toAccount: null,
    //     bucket: null,
    //     created_at: '2018-12-12T04:58:38.232Z',
    //     updated_at: '2018-12-12T04:58:38.251Z',
    //   },
    //   {
    //     id: 3,
    //     name: null,
    //     amount: null,
    //     details: 'wut...updated!',
    //     due: null,
    //     scheduled: null,
    //     effective: null,
    //     fromAccount: null,
    //     toAccount: null,
    //     bucket: null,
    //     created_at: '2018-12-12T04:58:29.820Z',
    //     updated_at: '2018-12-16T20:24:08.294Z',
    //   },
    //   {
    //     id: 11,
    //     name: null,
    //     amount: null,
    //     details: null,
    //     due: null,
    //     scheduled: null,
    //     effective: null,
    //     fromAccount: null,
    //     toAccount: null,
    //     bucket: null,
    //     created_at: '2018-12-17T03:25:47.393Z',
    //     updated_at: '2018-12-17T03:25:47.408Z',
    //   },
    //   {
    //     id: 12,
    //     name: null,
    //     amount: 5,
    //     details: null,
    //     due: null,
    //     scheduled: null,
    //     effective: null,
    //     fromAccount: null,
    //     toAccount: null,
    //     bucket: null,
    //     created_at: '2018-12-17T03:25:53.839Z',
    //     updated_at: '2018-12-17T03:25:53.852Z',
    //   },
    //   {
    //     id: 14,
    //     name: null,
    //     amount: null,
    //     details: "heck 'em",
    //     due: null,
    //     scheduled: null,
    //     effective: null,
    //     fromAccount: null,
    //     toAccount: null,
    //     bucket: null,
    //     created_at: '2018-12-17T03:46:14.511Z',
    //     updated_at: '2018-12-17T03:46:14.524Z',
    //   },
    //   {
    //     id: 15,
    //     name: 'fux wit it',
    //     amount: 999,
    //     details: null,
    //     due: null,
    //     scheduled: null,
    //     effective: null,
    //     fromAccount: null,
    //     toAccount: null,
    //     bucket: null,
    //     created_at: '2018-12-17T06:48:33.439Z',
    //     updated_at: '2018-12-17T06:48:33.459Z',
    //   },
    //   {
    //     id: 16,
    //     name: "we're back",
    //     amount: null,
    //     details: 'baybay',
    //     due: null,
    //     scheduled: null,
    //     effective: null,
    //     fromAccount: null,
    //     toAccount: null,
    //     bucket: null,
    //     created_at: '2019-01-12T04:12:35.324Z',
    //     updated_at: '2019-01-12T04:12:35.413Z',
    //   },
    //   {
    //     id: 17,
    //     name: null,
    //     amount: null,
    //     details: null,
    //     due: '2019-04-20T04:00:00.000Z',
    //     scheduled: '2019-04-20T04:00:00.000Z',
    //     effective: '2019-04-20T04:00:00.000Z',
    //     fromAccount: null,
    //     toAccount: null,
    //     bucket: null,
    //     created_at: '2019-01-12T04:15:24.917Z',
    //     updated_at: '2019-01-12T04:15:24.933Z',
    //   },
    //   {
    //     id: 19,
    //     name: 'baby boi',
    //     amount: null,
    //     details: null,
    //     due: null,
    //     scheduled: null,
    //     effective: null,
    //     fromAccount: null,
    //     toAccount: null,
    //     bucket: null,
    //     created_at: '2019-01-12T04:27:30.502Z',
    //     updated_at: '2019-01-12T04:27:30.523Z',
    //   },
    //   {
    //     id: 20,
    //     name: null,
    //     amount: null,
    //     details: 'tester',
    //     due: '2019-01-15T05:00:00.000Z',
    //     scheduled: null,
    //     effective: null,
    //     fromAccount: null,
    //     toAccount: null,
    //     bucket: null,
    //     created_at: '2019-01-12T04:27:41.819Z',
    //     updated_at: '2019-01-12T04:27:41.840Z',
    //   },
    //   {
    //     id: 21,
    //     name: null,
    //     amount: null,
    //     details: 'buckets then?',
    //     due: null,
    //     scheduled: null,
    //     effective: null,
    //     fromAccount: null,
    //     toAccount: null,
    //     bucket: null,
    //     created_at: '2019-01-12T04:27:50.859Z',
    //     updated_at: '2019-01-12T04:27:50.859Z',
    //   },
    //   {
    //     id: 26,
    //     name: 'fixeD',
    //     amount: null,
    //     details: 'think we got it',
    //     due: null,
    //     scheduled: null,
    //     effective: null,
    //     fromAccount: {
    //       id: 1,
    //       name: 'chrome-checking',
    //       details: 'chrome checking account',
    //       type: null,
    //       initialBalance: 1100,
    //       created_at: '2018-12-16T06:47:30.747Z',
    //       updated_at: '2018-12-16T06:47:30.760Z',
    //     },
    //     toAccount: {
    //       id: 2,
    //       name: 'chrome-savings',
    //       details: 'savings account @ chrome',
    //       type: null,
    //       initialBalance: 4500,
    //       created_at: '2019-01-12T04:36:31.189Z',
    //       updated_at: '2019-01-12T04:36:31.243Z',
    //     },
    //     bucket: {
    //       id: 3,
    //       name: 'ah fuck it, right?',
    //       created_at: '2018-12-16T06:46:51.889Z',
    //       updated_at: '2018-12-16T06:46:51.899Z',
    //     },
    //     created_at: '2019-01-12T04:43:27.998Z',
    //     updated_at: '2019-01-12T04:43:28.048Z',
    //   },
    //   {
    //     id: 27,
    //     name: 'do',
    //     amount: 100,
    //     details: 'dollars sound like a lot',
    //     due: null,
    //     scheduled: null,
    //     effective: null,
    //     fromAccount: null,
    //     toAccount: null,
    //     bucket: null,
    //     created_at: '2019-01-14T07:16:05.369Z',
    //     updated_at: '2019-01-14T07:16:05.439Z',
    //   },
    // ];

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
