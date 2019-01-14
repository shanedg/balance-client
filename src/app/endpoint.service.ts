import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
} from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EndpointService {
  /**
   * Protocol and host for API requests.
   */
  private baseURL = 'http://localhost';

  /**
   * Port for API requests.
   */
  private port = '1337';

  constructor(private http: HttpClient) {}

  /**
   * [TODO] Lifted from angular docs, needs work for our context.
   * @param {HttpErrorResponse} error Error to handle from http response.
   */
  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` + `body was: ${error.error}`
      );
    }
    // return an observable with a user-facing error message
    return throwError('Something bad happened; please try again later.');
  }

  /**
   * Generic API request to create a given object.
   *
   * [TODO] Will eventually need to auth these requests somehow.
   * @param {string} path Path from the base
   * @param {any} newNoun New object to create.
   * @returns Observable result of http POST.
   */
  create(path: string, newNoun: any) {
    const endpoint =
      this.baseURL +
      (this.port == null || this.port === '' ? '' : `:${this.port}`) +
      path;
    const httpOptions = {
      // TODO: headers to eventually provide authentication for all GET's and POST's
      // headers: new HttpHeaders({
      //   'Content-Type':  'application/json',
      //   'Authorization': 'my-auth-token',
      // })
    };

    return this.http
      .post<any>(endpoint, newNoun, httpOptions)
      .pipe(catchError(this.handleError));
  }

  /**
   * Request all of a given type.
   * @param {string} path API type path.
   * @returns Observable result of http GET.
   */
  readAll(path: string) {
    const endpoint =
      this.baseURL +
      (this.port == null || this.port === '' ? '' : `:${this.port}`) +
      path;
    return this.http.get(endpoint);
  }

  /**
   * Request a specific instance of a given type.
   * @param {string} path API type path.
   * @param {number} id ID of item to fetch.
   * @returns Observable result of http GET.
   */
  read(path: string, id: number) {
    const endpoint =
      this.baseURL +
      (this.port == null || this.port === '' ? '' : `:${this.port}`) +
      path +
      id +
      '/';
    return this.http.get(endpoint);
  }

  /**
   * Update an existing instance of a given type.
   * @param {string} path API type path.
   * @param {number} id ID of item to update.
   * @param {any} newNoun Updated item.
   * @returns Observable result of http POST.
   */
  update(path: string, id: number, newNoun: any) {
    const endpoint =
      this.baseURL +
      (this.port == null || this.port === '' ? '' : `:${this.port}`) +
      path +
      id +
      '/';
    const httpOptions = {};

    return this.http
      .put<any>(endpoint, newNoun, httpOptions)
      .pipe(catchError(this.handleError));
  }
}
