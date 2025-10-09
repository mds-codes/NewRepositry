import { Component,input,OnInit } from '@angular/core';
import { Todoservice } from './todoservice';
import { Rendertodos } from './rendertodos/rendertodos';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-todolist',
  imports: [CommonModule,Rendertodos],
  templateUrl: './todolist.html',
  styleUrl: './todolist.css'
})
export class Todolist implements OnInit {
    todos:any[]=[];
    todoName:string='';
    isEdited:boolean=false;
    editedIndex!:number;
    constructor(private Todo:Todoservice){}
    ngOnInit(): void {
        this.todos=this.Todo.getTodos();
        console.log(this.Todo.getTodos());
    }
    onInput(input:HTMLInputElement){
      if(input.value?.length>0){
        this.todoName=input.value;
        input.value='';
        let newTodo={name:this.todoName,date:new Date().toString(),id:this.todos.length+1,isComplete:false};
        this.Todo.addTodos(newTodo);
      }
    }
    onSelected(event:{id:number,type:string}){
      if(event.type==='delete'){
        this.Todo.deleteTodo(event.id);
        this.todos=this.Todo.getTodos();
      }
      else{
        this.isEdited=true;
        this.editedIndex=event.id;
        const todoToEdit = this.todos.find(t => t.id === event.id);
        const inputEl = document.getElementById('todo') as HTMLInputElement;
          if(todoToEdit!==-1){
            inputEl.value=todoToEdit.name;
          }
      }
    }
    onUpdate(input:HTMLInputElement){
      if(input.value?.length>0){
      this.todoName=input.value;
      let newTodo={name:this.todoName,date:new Date().toString(),id:this.editedIndex,isComplete:false};
      this.Todo.updateTodo(newTodo);
      input.value='';
      this.isEdited=false;
    }
  }


}
