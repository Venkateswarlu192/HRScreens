import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
// import { Dialog } from './dialog';
@Injectable({
  providedIn: 'root'
})
export class DialogService {

  constructor(private httpClient: HttpClient) { }


  // getDepartmentsList(): Observable<Dialog[]>{
  //   return this.httpClient.get<Dialog[]>(`${this.baseURL}`);
  // }

  // createDepartments(dialog:Dialog): Observable<Object>{
  //   return this.httpClient.post(`${this.baseURL}`, dialog);
  // }
}
