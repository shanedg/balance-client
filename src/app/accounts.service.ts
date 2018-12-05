import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Account } from './account';

@Injectable({
  providedIn: 'root'
})
export class AccountsService {
  baseURL = 'http://localhost';
  port = '1337';
  path = '/accounts';

  constructor(private http: HttpClient) { }

  getAccounts() {
    const endpoint = this.baseURL + ((this.port == null || this.port === '') ? '' : `:${this.port}`) + this.path;
    return this.http.get(endpoint);
  }
}
