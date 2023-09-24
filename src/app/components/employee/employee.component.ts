import { Component, OnInit } from '@angular/core';

interface Employee{
  id:number,
  name:string,
  age:number
}
@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  

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
  }


]

  ngOnInit() {
    
  }

}
