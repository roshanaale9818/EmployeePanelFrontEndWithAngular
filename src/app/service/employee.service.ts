import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Employee } from '../model/employee';




@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  baseUrl  = environment.baseUrl;

  constructor(private http:HttpClient) { }

  getAllEmployees():Observable<any>{
    return this.http.get(environment.baseUrl);
  }

  getEmployee(id:number):Observable<any>{
    return this.http.get(`${this.baseUrl}/${id}`);
  }
  deleteEmployee(id:number):Observable<any>{
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
  createEmployee(employee:Employee):Observable<any>{
    return this.http.post(`${this.baseUrl}`,employee);
  }
  updateEmployee(id:number,employee:Employee){
    return this.http.put(`${this.baseUrl}/${id}`,employee);
  }
}
