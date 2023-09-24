import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/services/employee.service';


@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
   public employees:any=[]
  constructor(private _employeeService:EmployeeService){}

  ngOnInit() {
    this.employees=this._employeeService.getEmployees()
  }

}
