import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/api/users.service';
import { UsernameResponse } from 'src/app/services/model/usernameResponse';
import { User } from 'src/app/services/model/user.model';

@Component({
  selector: 'app-password-recovery',
  templateUrl: './password-recovery.component.html',
  styleUrls: ['./password-recovery.component.scss']
})
export class PasswordRecoveryComponent {

  errorMessage: string= '';
  user: UsernameResponse = {};
  regForm = new FormGroup({
    username: new FormControl(''),
    answer: new FormControl('')
  });

  constructor(private userServices: UsersService, private router: Router) { }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    if(this.regForm.value.username){
      this.getUser(this.regForm.value.username);
      if(this.user.answer && this.regForm.value.answer === this.user.answer){
        this.router.navigate(['/password-reset'], {state: {username: this.user?.username}});
      }
    }
    else{
      this.errorMessage = "Les champs nom d'utilisateur et reponse sont obligatoires";
    }

  }

  getUser(username:string){
    
    this.userServices.apiViewsUsersGetByUsername(username).subscribe((u: UsernameResponse)=>{
       this.user = u;
    },((error)=> {
      this.errorMessage = "Nom d'utilisateur ou secret invalide";
    } ))
  }
}
