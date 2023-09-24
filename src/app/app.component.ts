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

 title:string ="Cute Beaver Company"

 imgScr:string="https://img.freepik.com/premium-vector/cartoon-happy-beaver-white-background_194935-62.jpg?w=740"
  constructor(){}
 


}
