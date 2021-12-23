import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateEmployeeComponent } from './components/create-employee/create-employee.component';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { UpdateEmployeeComponent } from './components/update-employee/update-employee.component';

const routes: Routes = [
  {path: "employees", component:EmployeeListComponent},
  {path: "update/:id", component:UpdateEmployeeComponent},
  {path: "add", component:CreateEmployeeComponent},  
  {path: "", redirectTo:"employees", pathMatch:"full"},

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
