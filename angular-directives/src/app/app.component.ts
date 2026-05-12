import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  
  isLoggedIn: boolean = true;
  userName: string = 'John Doe';
  userAge: number = 40;

  secondUserName: string = 'Svetlin Garabedyan';

  users = [
    {firstName: 'Gabi', lastName: 'Garabedyan', age: 24},
    {firstName: 'Toni', lastName: 'Garabedyan', age: 49},
    {firstName: 'Svetlin', lastName: 'Garabedyan', age: 54},
  ]
}
