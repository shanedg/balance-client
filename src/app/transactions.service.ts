import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Transaction } from './transaction';

@Injectable({
  providedIn: 'root'
})
export class TransactionsService {
  baseURL = 'http://localhost';
  port = '1337';
  path = '/transactions';

  constructor(private http: HttpClient) { }

  // TODO: strategy around adding transactions via service
  // and what triggers update to ui.

  getTransactions() {
    const endpoint = this.baseURL + ((this.port == null || this.port == '') ? '' : `:${this.port}`) + this.path;
    return this.http.get(endpoint);
  }
}
