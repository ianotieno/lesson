import { Component } from '@angular/core';

interface Person{
  id:number,
  name:string,
  sex:string,
  isCool:boolean
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
handleChange(event: any) {
this.animal=event?.target.value;
}
 title:string ="Cute Beaver Employees"

 imgScr:string="https://img.freepik.com/premium-vector/cartoon-happy-beaver-white-background_194935-62.jpg?w=740"
  constructor(){}
  favouriteAnimal:string =" "
  beavername:string=""

  handleClick(value:any){
    console.log(value)
  }

persons:Person[]=[{
  id:1,
  name:"hellen",
  sex:"female",
  isCool: true
},
{
  id:2,
  name:"peter",
  sex:"male",
  isCool: false
},
{
  id:3,
  name:"mary",
  sex:"female",
  isCool: true
},
{
  id:4,
  name:"kevin",
  sex:"male",
  isCool: false
},]

animal: string=""

}
