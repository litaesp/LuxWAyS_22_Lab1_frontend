import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/api/users.service';
import { Credential, InlineResponse2005, User } from '../../../services/model/models'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  logForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });
  credentials: Credential = {};
  constructor(private userServices: UsersService, private router: Router) { }

  onSubmit() {
    this.credentials = {password: this.logForm.value.password?.toString() , username: this.logForm.value.username?.toString()};
    this.userServices.apiViewsUsersLoginUser(this.credentials).subscribe((res: InlineResponse2005) => {
      localStorage.setItem('access_token', 'true');
      console.log(res)
      if(res.auth_token){
        localStorage.setItem('access_token', res.auth_token);
        this.router.navigate(["/"]);
      }
    });
  }

}
