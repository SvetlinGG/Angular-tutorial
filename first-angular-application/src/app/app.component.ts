import { Component } from '@angular/core';
import { FormsModule} from '@angular/forms'
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { HeaderComponent } from "./header/header.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent, HeaderComponent, FormsModule],
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

  userName: string = 'John Doe';
  textValue: string = 'Value is coming from component';

  submit(){
    console.log('somebody clicked');
    
  }

  keyEnter(){
    //console.log(event.keyCode);
    // if(keyCode == 13){
    //   console.log('Enter key Pressed');
    // }
    console.log(this.textValue);
    
  }

  keyupFiltering(user: HTMLInputElement){
    console.log(user.id);
    
  }

  updateUsername(username: HTMLInputElement){
    this.userName = username.value
    console.log(this.userName);
    
  }
}
