import { Component, signal } from '@angular/core';
import { NewComponent } from './new-component/new-component';
import { Reusecomponent } from './reusecomponent/reusecomponent';
// import { RouterOutlet } from '@angular/router';
import { Counter } from './counter/counter';
import { Decorators } from './decorators/decorators';
import { Subclass } from './decorators/subclass/subclass';
import { Forms } from './forms/forms';
import { Todolist } from './todolist/todolist';

@Component({
  selector: 'app-root',
  // imports: [RouterOutlet],
  // imports:[Counter,NewComponent,Reusecomponent,Decorators,Forms,Todolist],
  imports:[Todolist],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  title="Welcome to Angular"
  name="Angular Learning process";
}
