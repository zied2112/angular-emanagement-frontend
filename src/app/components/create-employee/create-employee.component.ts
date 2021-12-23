import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import { Router } from '@angular/router';

import { Employee } from 'src/app/employee';
import { EmployeeService } from 'src/app/services/employee.service';
@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {
  employee:Employee = new Employee()

  constructor(private employeeService :EmployeeService , private router:Router) { }

  ngOnInit(): void {
  }
  goToEmployeeList(){
  }
  onsubmit(f:NgForm){
    this.employeeService.addEmployee(f.value).subscribe(data => console.log(data)),console.error();
    this.router.navigate(['employees'])
    
  }

}
