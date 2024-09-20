import { JsonPipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [JsonPipe],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit {
  http= Inject(HttpClient);
  userList: any[]=[];
​ngOnInit(): void {
    this.getAllUser();
}
getAllUser(){
this.http.get("https://freeapi.miniprojectideas.com/api/User/GetAllUsers").subscript((Res:any)=>{
this.userList =Res.data;




})

}


}
