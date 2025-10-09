import { Injectable } from '@angular/core';
export interface Todo{
    name:string,
    date:string,
    id:number,
    isComplete:boolean
};
@Injectable({
  providedIn: 'root'
})
export class Todoservice {
  private todos:Todo[]=[
  ];

  getTodos():Todo[]{
    
    return  this.todos;
  }
  addTodos(newTodo:Todo):void{
    this.todos.push(newTodo);
  }
  deleteTodo(id:number):void{
    console.log(id);
    this.todos=this.todos.filter(item=>item.id!==id);
    console.log(this.todos);
  }
  updateTodo(newTodo:Todo):void{
    let index=this.todos.findIndex(item=>item.id===newTodo.id);
    if(index!=-1){
      this.todos[index]=newTodo;
    }
    else{
      alert(`Todo with id ${newTodo.id} is not found to update.!`);
    }
  }
}
