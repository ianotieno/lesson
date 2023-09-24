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
  
  employees:Employee[]=[
    {
    id:1,
    name:"tom",
    age:20
  },
  {
    id:2,
    name:"mary",
    age:30
  },
  {
    id:4,
    name:"paul",
    age:22
  }]
  ngOnInit(){
    
  }
}
