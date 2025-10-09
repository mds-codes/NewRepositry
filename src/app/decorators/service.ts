import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Service {
  users=[
    {name:"venkat",email:"venkat@gmail.com",id:1},
    {name:"Arun",email:"Arun@gmail.com",id:2},
    {name:"Sai",email:"Sai@gmail.com",id:3},
  ]

  getUsers(){
    return this.users;
  }

}
