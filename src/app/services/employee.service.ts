import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from '../employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private url = "http://localhost:8281/api/v1/employees"
  constructor(private httpClient: HttpClient) { }

  getEmployeesList():Observable<Employee[]>{
    return this.httpClient.get<Employee[]>(`${this.url}`) ; 
  }
  addEmployee(employee:Employee):Observable<Object>{
    return this.httpClient.post(`${this.url}`,employee) ; 
  }
  getEmployeeById(id:number):Observable<Employee>{
    return this.httpClient.get<Employee>(`${this.url}/${id}`)
  }
  updateEmployee(id:number, employee:Employee):Observable<object>{
    return this.httpClient.put(`${this.url}/${id}`, employee)
  }
  deleteEmployee(id:number):Observable<Object>{
    return this.httpClient.delete(`${this.url}/${id}`)
  }
}

