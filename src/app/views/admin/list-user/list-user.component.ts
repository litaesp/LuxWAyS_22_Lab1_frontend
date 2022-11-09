import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/api/users.service';
import { UserAdminView } from 'src/app/services/model/user-admin-view.model';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.scss']
})
export class ListUserComponent implements OnInit {

  errorMessage: string ='';
  users: UserAdminView[] =[];
  constructor(private userService:UsersService) { }

  ngOnInit(): void {
    this.userService.apiViewsUsersGetAllUsers().subscribe((users:any) => {
      console.log(users);
      this.users = users.users;
    },((error)=> {
      this.errorMessage = "Error de connexion veuillez réessayer ultérieurement"
    }))
  }

}
