import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Departments } from './departments';
@Injectable({
  providedIn: 'root'
})
export class DepartmentsService {


  private baseURL = "http://localhost:8080/api/v1/departments";
  constructor( private httpClient: HttpClient) { }

  getDepartmentsList(): Observable<Departments[]>{
    return this.httpClient.get<Departments[]>(`${this.baseURL}`);
  }

  createEmployee(Departments:Departments): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`, Departments);
  }

}
