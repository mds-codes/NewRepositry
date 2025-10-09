import { Component,OnInit } from '@angular/core';
import {Service} from "./service";
import { Subclass } from './subclass/subclass';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-decorators',
  imports: [CommonModule,Subclass],
  standalone:true,
  templateUrl: './decorators.html',
  styleUrl: './decorators.css'
})
export class Decorators implements OnInit{
  users:any[]=[];
  constructor(private Users:Service){}
  ngOnInit(): void {
      this.users=this.Users.getUsers();
  }
  onUserSelected(id: number) {
    console.log('Selected user id:', id);
  }
}
