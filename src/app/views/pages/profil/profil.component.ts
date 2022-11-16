import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/api/users.service';
import { UsernameResponse } from 'src/app/services/model/usernameResponse';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.scss']
})
export class ProfilComponent implements OnInit {

  message:string ='';
  errorMessage:string='';
  username:string = '';
  userId:string='';
  user: UsernameResponse = {};
  profilForm = new FormGroup({
    email: new FormControl(''),
    account: new FormControl(''),
  });
  constructor(private userServices: UsersService,private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(params => { 
       let userId = params.get('id'); 
       if(userId){
        this.userId=userId;
       }
       let user=this.userServices.apiViewsUsersGetById(this.userId).subscribe((u:UsernameResponse)=>{
        this.user=u;
        this.profilForm.patchValue({ email : this.user.email });
        this.profilForm.patchValue({ account : this.user.account});

      },(error:Error)=>{
        this.errorMessage = error.message;
      })
   });
  }

  onSubmit() {
    console.log(this.profilForm.value);
    this.userServices.apiViewsUsersUpdateAccount(this.profilForm.value,this.userId).subscribe((response)=>{
      this.message=response;
      this.router.navigateByUrl('')
    },
    (error)=> {
      this.errorMessage = error.message;
    })

  }

  getUser(username:string){
    
    this.userServices.apiViewsUsersGetByUsername(username).subscribe((u: UsernameResponse)=>{
       this.user = u;
       this.profilForm.patchValue({ email : this.user.email });
    },((error)=> {
      console.log(error);
    } ))
  }
}