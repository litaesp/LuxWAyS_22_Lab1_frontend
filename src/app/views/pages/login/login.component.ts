import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersService } from 'src/app/services/api/users.service';
import { Credential, InlineResponse2005, User } from '../../../services/model/models'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent{

  logForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });
  credentials: Credential = {};
  errorMessage:String='';
  constructor(private userServices: UsersService, private route: ActivatedRoute, private router: Router) { }

  onSubmit() {
    this.credentials = {password: this.logForm.value.password?.toString() , username: this.logForm.value.username?.toString()};
    this.userServices.apiViewsUsersLoginUser(this.credentials).subscribe((res: InlineResponse2005) => {
      if(res.auth_token){
        const returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/'
        localStorage.setItem('access_token', res.auth_token);
        this.router.navigateByUrl(returnUrl)
      }else {
        this.errorMessage = res.message ? res.message : '';
      }

    },
    (error)=>{
      
    });
  }

}
