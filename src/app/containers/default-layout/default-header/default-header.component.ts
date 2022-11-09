import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { ClassToggleService, HeaderComponent } from '@coreui/angular';
import { UsersService } from 'src/app/services/api/users.service';

@Component({
  selector: 'app-default-header',
  templateUrl: './default-header.component.html',
})
export class DefaultHeaderComponent extends HeaderComponent {

  @Input() sidebarId: string = "sidebar";

  constructor(private classToggler: ClassToggleService, private userService: UsersService) {
    super();
  }

  logOut(){
    this.userService.doLogout();
  }
}
