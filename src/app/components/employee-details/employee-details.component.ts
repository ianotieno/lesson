import { Component, OnInit } from '@angular/core';

interface Employee{
  id:number,
  name:string,
  age:number
}
@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit{
  
  public employees=[]
  ngOnInit(){
    
  }
}
