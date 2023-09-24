import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/services/employee.service';
import {MatTableModule} from '@angular/material/table';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css'],
 
})
export class EmployeeDetailsComponent implements OnInit{
  public employees:any=[]
  
  constructor(private _employeeService :EmployeeService){}
  ngOnInit(){
  this._employeeService.getEmployees()
  .subscribe(data => this.employees=data)
  }
}
