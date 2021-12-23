import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from 'src/app/employee';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  constructor(private employeeService: EmployeeService, private router:Router) {  }
  employees!: Employee[]; 
  ngOnInit(): void {
    this.getEmployees()
  }

  private getEmployees(){
    this.employeeService.getEmployeesList().subscribe(data => this.employees= data )
  }
  update(id:number){
    this.router.navigate(['update',id]) ; 
  }
  delete(id:number){
    if(confirm("Are you sure to delete "+id+"?")) {
      this.employeeService.deleteEmployee(id).subscribe(data => this.getEmployees())
    }
   

    
  }

}
