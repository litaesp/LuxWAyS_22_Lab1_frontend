import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/api/users.service';
import { UsernameResponse } from 'src/app/services/model/usernameResponse';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  isVulnerable: boolean = true;
  message: string = '';
  errorMessage: string = '';
  username: string = '';
  userId: string = '';
  user: UsernameResponse = {};
  searchForm = new FormGroup({
    username: new FormControl(''),
  });
  constructor(private userServices: UsersService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
  }

  getUser() {
    if (this.searchForm.value.username) {
      this.userServices.apiViewsUsersGetByUsername(this.searchForm.value.username).subscribe((u: UsernameResponse) => {
        this.user = u;
      }, ((error) => {
        console.log(error);
      }))
    }

  }
}
