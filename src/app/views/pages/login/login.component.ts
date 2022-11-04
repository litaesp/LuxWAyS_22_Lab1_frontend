import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { UsersService } from 'src/app/services/api/users.service';
import { Credential, V1RegisterBody } from '../../../services/model/models'
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
  constructor(private userServices: UsersService) { }

  onSubmit() {
    this.credentials = {password: this.logForm.value.password?.toString() , username: this.logForm.value.username?.toString()};
    let result = this.userServices.apiViewsUsersLoginUser(this.credentials).subscribe();
    console.warn(result);
  }

}
