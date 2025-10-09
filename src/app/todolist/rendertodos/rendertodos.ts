import { Component,Input,Output,EventEmitter } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
@Component({
  selector: 'app-rendertodos',
  imports: [CommonModule],
  templateUrl: './rendertodos.html',
  styleUrl: './rendertodos.css'
})
export class Rendertodos {
  @Input() todo!: { id: number; name: string; date: string,isComplete:boolean };
  @Output() action = new EventEmitter<{ id: number; type: string }>();

  onClick(id: number, type: string) {
    this.action.emit({ id, type });
  }
}
