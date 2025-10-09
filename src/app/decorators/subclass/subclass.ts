import { Component,Input,Output,EventEmitter, output } from '@angular/core';

@Component({
  selector: 'app-subclass',
  imports: [],
  standalone:true,
  templateUrl: './subclass.html',
  styleUrl: './subclass.css'
})
export class Subclass {
    @Input() user!:{name:string,email:string,id:number};
    @Output() selectedNameId=new EventEmitter<number>();
  
    onSelect(){
      this.selectedNameId.emit(this.user.id);
    }
}
