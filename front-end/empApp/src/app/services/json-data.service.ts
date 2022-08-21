import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../models/user';
import { AccountService } from './account.service';
import { AuthHttp } from './auth-http.service';


@Injectable()
export class JsonDataService {
  private headers: HttpHeaders | undefined;
  user: User | undefined;

  constructor(
    private http: AuthHttp,
    private accountService: AccountService) {
    accountService.user.subscribe(user => {
      this.user = user;
    });

    this.headers = new HttpHeaders();
    this.headers.set("Authorization", this.user?.token + "");
    this.headers.append("Content-Type", "application/json")
  }


  public getAllEmployees(): Observable<any> {
    const url = `${environment.apiUrl}/users`;
    return this.http.get(url, this.headers);
  }


  public addEmployee(user: User) {
    return this.http.post(`${environment.apiUrl}/users/register`, user).toPromise();
  }
  public deleteEmployee(userId : string){
    const url = `${environment.apiUrl}/users/?id=`+userId;
    return this.http.delete(url, this.headers);
  }

  public updateEmployee(userId : string, user:User){
    const url = `${environment.apiUrl}/users/?id=`+userId;
    return this.http.put(url,user, this.headers);
  }

}
