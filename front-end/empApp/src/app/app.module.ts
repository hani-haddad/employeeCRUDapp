import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { JwtInterceptor } from './helper';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button'
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from "@angular/material/input";
import { MatMenuModule } from '@angular/material/menu';
import { MatListModule } from "@angular/material/list";
import { MatSelectModule } from "@angular/material/select";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatSortModule } from "@angular/material/sort";
import { MatTableModule } from "@angular/material/table";
import { JsonDataService } from './services/json-data.service';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { AuthHttp } from './services/auth-http.service';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { EmployeeService } from './services/employee.service';
import { AddDialogComponent } from './dialogs/add-dialog/add-dialog.component';
import { EditDialogComponent } from './dialogs/edit-dialog/edit-dialog.component';
import { DeleteDialogComponent } from './dialogs/delete-dialog/delete-dialog.component';

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    MatDialogModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatInputModule,
    MatTableModule,
    MatCheckboxModule,
    MatSortModule,
    MatDialogModule,
    AppRoutingModule,
    MatSelectModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    MatMenuModule,
    MatPaginatorModule
  ],
  declarations: [
    AppComponent, HomeComponent,EmployeeListComponent, NavBarComponent, AddDialogComponent, EditDialogComponent, DeleteDialogComponent
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true }, EmployeeService, JsonDataService, AuthHttp,


  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
