import { Injectable } from '@angular/core';
 
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor() { }
  getEmployees(){
    return[
      {"id":1, "name":"tom","age":44},
      {"id":2, "name":"mary","age":48},
      {"id":3, "name":"paul","age":42},
      {"id":4, "name":"phillip","age":30},

    ]
  }
}