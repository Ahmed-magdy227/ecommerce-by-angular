import { Component } from '@angular/core';
import { UserAuthService } from 'src/app/services/user-auth.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss']
})
export class UserLoginComponent {
  constructor(private userService:UserAuthService){}
  userLogin(){
    this.userService.login('admin@gmail.com','password12');
    this.user=this.userService.UserState;//true
  }
  userLogout(){
    this.userService.logout();
    this.user=this.userService.UserState;//false
  }
}
