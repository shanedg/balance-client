import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EndpointService {
  baseURL = 'http://localhost';
  port = '1337';

  constructor(private http: HttpClient) { }

  // possible error handling method, lifted from angular docs
  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  }

  create(path: string, newNoun: any) {
    const endpoint = this.baseURL + ((this.port == null || this.port === '') ? '' : `:${this.port}`) + path;
    const httpOptions = {
      // TODO: headers to eventually provide authentication...
      // headers: new HttpHeaders({
      //   'Content-Type':  'application/json',
      //   'Authorization': 'my-auth-token'
      // })
    };

    return this.http.post<any>(endpoint, newNoun, httpOptions)
      .pipe(catchError(this.handleError));
  }

  readAll(path: string) {
    const endpoint = this.baseURL + ((this.port == null || this.port === '') ? '' : `:${this.port}`) + path;
    return this.http.get(endpoint);
  }

  read(path: string, id: number) {
    const endpoint = this.baseURL + ((this.port == null || this.port === '') ? '' : `:${this.port}`) + path + id + '/';
    return this.http.get(endpoint);
  }

  update(path: string, id: number, newNoun: any) {
    const endpoint = this.baseURL + ((this.port == null || this.port === '') ? '' : `:${this.port}`) + path + id + '/';
    const httpOptions = {
      // TODO: headers to eventually provide authentication...
    };

    return this.http.put<any>(endpoint, newNoun, httpOptions)
      .pipe(catchError(this.handleError));
  }
}
