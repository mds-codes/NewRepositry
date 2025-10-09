import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-counter',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './counter.html',
  styleUrl: './counter.css'
})
export class Counter {
  count:number=0;
  error:string='';
  handleAction(type:string){
      if(type=="add"){
        this.count=this.count+1;
        this.error='';
      }
      else if(type=='minus'){
        if(this.count>0){
          this.count=this.count-1;
          this.error='';
        }
        else{
          this.error="The count is Already Zero.!";
        }
      }
      else{
        this.count=0;
        this.error='';
      }
  }
}
