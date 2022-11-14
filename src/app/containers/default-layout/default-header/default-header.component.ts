import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { ClassToggleService, HeaderComponent } from '@coreui/angular';
import { UsersService } from 'src/app/services/api/users.service';

@Component({
  selector: 'app-default-header',
  templateUrl: './default-header.component.html',
})
export class DefaultHeaderComponent extends HeaderComponent implements OnInit {

  @Input() sidebarId: string = "sidebar";

  userId: number=0;
  constructor(private classToggler: ClassToggleService, private userService: UsersService) {
    super();
  }

  ngOnInit(): void {
    this.userId=this.userService.getUserId();
  }

  logOut(){
    this.userService.doLogout();
  }
}
