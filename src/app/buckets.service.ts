import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BucketsService {
  baseURL = 'http://localhost';
  port = '1337';
  path = '/buckets';

  constructor(private http: HttpClient) { }

  getBuckets() {
    const endpoint = this.baseURL + ((this.port == null || this.port === '') ? '' : `:${this.port}`) + this.path;
    return this.http.get(endpoint);
  }
}
