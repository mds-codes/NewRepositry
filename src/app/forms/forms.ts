import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-forms',
  templateUrl: './forms.html',
  imports:[CommonModule,FormsModule],
  styleUrl: './forms.css'
})
export class Forms {
  name = 'Angular';
  count = 0;
  isDisabled = true;
}