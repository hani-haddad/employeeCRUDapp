import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ReplaySubject } from 'rxjs';
import { JsonDataService } from './json-data.service';
import {  IUser, User } from '../models';

@Injectable()
export class EmployeeService {

    private $employees: ReplaySubject<User[]>;
    public oEmployees: Observable<User[]>;
    private _Employees: User[] = [];

    groupId: string | undefined;

    constructor(private dataService: JsonDataService) {
        this.$employees = new ReplaySubject<User[]>(1);
        this.oEmployees = this.$employees.asObservable();

    }

      public async getAll() {
    this._Employees = await this.dataService.getAllEmployees().toPromise();

    this.$employees.next(this._Employees);

  }

}