import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { HeaderComponent } from "./header/header.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Angular app';

  change(){
    this.title = 'Project'
    console.log(this.title);
    
  }

  imgUrl: string = 'https://miro.medium.com/v2/resize:fit:1200/1*lhfGTouqSQ-fx7PRXaFI-Q.png'

  isDisabled: boolean = true;
  isActive: boolean = true;

  fruitName: string = 'apple';

  submit(){
    console.log('somebody clicked');
    
  }
}
