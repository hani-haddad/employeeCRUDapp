import { Observable, throwError as observableThrowError } from 'rxjs';
import { forwardRef, Inject, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';


import { IHttp } from './ihttp.class';
import { catchError } from 'rxjs/internal/operators/catchError';


@Injectable()
export class AuthHttp implements IHttp {

  constructor(
    private http: HttpClient,
  ) {
  }

  displayAppError(response: Observable<HttpResponse<any>>): Observable<HttpResponse<any>> {
    return response.pipe(catchError(
      (error: any, caught: Observable<HttpResponse<any>>) => {
        if (error instanceof HttpResponse && error.status === 500) {
          const result: any = error;
          if (result.errorCode !== undefined) {
            console.error('Error Code: ' + result.errorCode);
            console.error('Error Message: ' + result.message);
            console.error('Error Stack: ' + result.stackTrace);
          }

        }
        return observableThrowError('There was a server error');
      }));
  }

  get(url: string, headers?: HttpHeaders): Observable<any> {
    const result: Observable<any> = this.http.get<any>(url, {
      headers: !!headers ? headers : new HttpHeaders(),
      observe: 'body',
      responseType: 'json'
    });
    return this.displayAppError(result);
  }

  post(url: string, data: any, headers?: HttpHeaders): Observable<any> {
    const result: Observable<any> = this.http.post<any>(url, data, {
      headers: !!headers ? headers : new HttpHeaders(),
      observe: 'body',
      responseType: 'json'
    });

    return this.displayAppError(result);
  }

  put(url: string, data: any, headers?: HttpHeaders): Observable<any> {
    const result: Observable<any> = this.http.put<any>(url, data, {
      headers: !!headers ? headers : new HttpHeaders(),
      observe: 'body',
      responseType: 'json'
    });

    return this.displayAppError(result);
  }

  delete(url: string, headers?: HttpHeaders): Observable<HttpResponse<any>> {
    const result: Observable<any> = this.http.delete<any>(url, {
      headers: !!headers ? headers : new HttpHeaders(),
      observe: 'body',
      responseType: 'json'
    });

    return this.displayAppError(result);
  }
}
