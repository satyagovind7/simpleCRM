import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DepartmentListComponent } from './department-list/department-list.component';
import { EmplistComponent } from './emplist/emplist.component';
// import { EmplistComponent } from './emplist/emplist.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {path: '' , pathMatch: 'full', redirectTo:'departments'},
  {path : 'departments', component: DepartmentListComponent},
  {path : 'departments/:id', component: EmplistComponent},
  {path: 'employee', component: EmployeeListComponent},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routing = [DepartmentListComponent,EmployeeListComponent,PageNotFoundComponent]