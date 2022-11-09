import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/api/users.service';
import { User } from 'src/app/services/model/user.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  errorMessage: string = '';
  newUser: User = {};
  regForm = new FormGroup({
    username: new FormControl(''),
    email: new FormControl(''),
    answer: new FormControl(''),
    newpassword: new FormControl(''),
    newpassword2: new FormControl(''),
  });

  constructor(private userServices: UsersService, private router: Router) { }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    if(this.regForm.value.newpassword && this.regForm.value.newpassword2 && this.regForm.value.newpassword === this.regForm.value.newpassword2){
      this.newUser = {
        username : this.regForm.value.username?.toString(),
        password: this.regForm.value.newpassword?.toString(),
        answer: this.regForm.value.answer?.toString(),
        email: this.regForm.value.email?.toString()
      };
      this.userServices.apiViewsUsersRegisterUser(this.newUser).subscribe((res)=> {
        this.router.navigate(["login"]);
      },((error)=>{
        this.errorMessage = "Impossible de créer l'utilisateur";
      })
      );
      console.warn(this.regForm.value);
    }else{
      this.errorMessage = "Impossible de créer l'utilisateur";
    }

  }

}
