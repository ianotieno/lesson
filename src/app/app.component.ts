import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 title:string ="Cute Beaver"
 imgScr:string="https://img.freepik.com/premium-vector/cartoon-happy-beaver-white-background_194935-62.jpg?w=740"
  constructor(){}
  favouriteAnimal:string =" "
  beavername:string=""
  handleClick(value:any){
    console.log(value)
  }
}
