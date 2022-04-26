import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule,routing } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatButtonModule } from '@angular/material/button';
import { HighligthDirective } from './highligth.directive';
import { HeaderComponent } from './header/header.component';
import { UsersModule } from './users/users.module';
import { FormsModule } from '@angular/forms';
import { EmployeeService } from './employee.service';
import { EmplistComponent } from './emplist/emplist.component';
import { EmpdetailComponent } from './empdetail/empdetail.component';
import {HttpClientModule} from '@angular/common/http';
import { DepartmentListComponent } from './department-list/department-list.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ValidationComponent } from './validation/validation.component'
 

@NgModule({
  declarations: [
    AppComponent,
    HighligthDirective,
    HeaderComponent,
    EmplistComponent,
    EmpdetailComponent,
    routing,
    PageNotFoundComponent,
    ValidationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    BrowserAnimationsModule,
    UsersModule,
    FormsModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
//something
