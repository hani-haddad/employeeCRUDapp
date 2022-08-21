import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { AddDialogComponent } from '../dialogs/add-dialog/add-dialog.component';
import { DeleteDialogComponent } from '../dialogs/delete-dialog/delete-dialog.component';
import { EditDialogComponent } from '../dialogs/edit-dialog/edit-dialog.component';
import { User } from '../models';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {
  displayedColumns = ['id', 'Username', 'firstName', 'lastName', 'age','actions'];

  empList: User[] | undefined
  constructor(private employeeService: EmployeeService,public dialogService: MatDialog) { }
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @ViewChild('filter',  {static: true}) filter: ElementRef;

  ngOnInit(): void {
    this.employeeService.oEmployees.subscribe(emp => {
      this.empList = emp;
    })

    this.employeeService.getAll().then(emp => {
            
      
          })
      
  }

  openAddDialog() {
    const dialogRef = this.dialogService.open(AddDialogComponent, {
      data: {issue: {} }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === 1) {
        this.employeeService.getAll()
      }
    });
  }
  startEdit(i: number, id: number, title: string, state: string, url: string, created_at: string, updated_at: string) {
    const dialogRef = this.dialogService.open(EditDialogComponent, {
      data: {id: id, title: title, state: state, url: url, created_at: created_at, updated_at: updated_at}
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === 1) {
        this.employeeService.getAll()
      }
    });
  }

  deleteItem( id: number) {
  
    const dialogRef = this.dialogService.open(DeleteDialogComponent, {
      data: {id: id}
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === 1) {
        this.employeeService.getAll();
      }
    });
  }

}
