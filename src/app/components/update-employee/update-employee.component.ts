import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from 'src/app/employee';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {
  id!:number; 
  employee :Employee = new Employee()
  constructor(private employeeService: EmployeeService, private routerr:ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
    this.id = this.routerr.snapshot.params['id']
    this.employeeService.getEmployeeById(this.id).subscribe(data => this.employee = data),console.error();
    
     
  }
  onsubmit( f:NgForm){
    this.employeeService.updateEmployee(this.id,f.value).subscribe(data => console.log(data)),console.error();
    this.router.navigate(['employees'])
  }

}
