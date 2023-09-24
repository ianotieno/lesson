import { EmployeeInterface } from './../employee';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
 
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

   private _url:string="/assets/data/employees.json"
  constructor(private http: HttpClient) { }
  getEmployees():Observable<EmployeeInterface[]>{
    return this.http.get<EmployeeInterface[]>(this._url)
  }
}
