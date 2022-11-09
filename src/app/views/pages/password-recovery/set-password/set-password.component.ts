import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/api/users.service';
import { UsernamePasswordBody } from 'src/app/services/model/usernamePasswordBody';

@Component({
  selector: 'app-set-password',
  templateUrl: './set-password.component.html',
  styleUrls: ['./set-password.component.scss']
})
export class SetPasswordComponent implements OnInit{
  errorMessage: string = '';
  newpasswordRequest: UsernamePasswordBody  = {};
  username:string = '';
  regForm = new FormGroup({
    newpassword: new FormControl(''),
    newpassword2: new FormControl(''),
  });

  constructor(private userServices: UsersService, private router: Router) { }
  ngOnInit(): void {
    const { username } = window.history.state;
    this.username = username;
    if(!username){
      this.router.navigate(["login"]);
    }
    console.log(username);
  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    if(this.regForm.value.newpassword && this.regForm.value.newpassword2 && this.regForm.value.newpassword === this.regForm.value.newpassword2){
      this.newpasswordRequest = {
        password: this.regForm.value.newpassword?.toString(),
      };
      this.userServices.apiViewsUsersUpdatePassword(this.newpasswordRequest, this.username, true).subscribe((res)=> {
        this.router.navigate(["login"]);
      },((error)=>{
        this.errorMessage = "Impossible de modifier le mot de passe";
      }));
    }
    else{
      this.errorMessage = "Les deux mots de passe saisie ne correspondent pas";
    }

  }

}
