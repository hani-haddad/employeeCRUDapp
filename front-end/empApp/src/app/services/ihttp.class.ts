import { Observable } from 'rxjs';
import { HttpResponse } from '@angular/common/http';

export interface IHttp {
  get(url: string): Observable<HttpResponse<any>>;
  /**
   * Performs a request with `post` http method.
   */
  post(url: string, body: any): Observable<HttpResponse<any>>;
  /**
   * Performs a request with `put` http method.
   */
  put(url: string, body: any): Observable<HttpResponse<any>>;
  /**
   * Performs a request with `delete` http method.
   */
  delete(url: string): Observable<HttpResponse<any>>;
}


