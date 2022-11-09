import { Component, OnInit, HostListener, OnDestroy, OnChanges } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { UsersService } from 'src/app/services/api/users.service';

import { navItems, navItemsAdmin } from './_nav';

@Component({
  selector: 'app-dashboard',
  templateUrl: './default-layout.component.html',
})
export class DefaultLayoutComponent implements OnInit, OnDestroy {

  public navItems = navItems;
  isAdmin: boolean = false;
  public perfectScrollbarConfig = {
    suppressScrollX: true,
  };

  constructor(private userService: UsersService, private router: Router) {
  }
  ngOnInit(): void {
    this.updateNav();
  }

  async updateNav() {
    this.isAdmin = this.userService.getRole() === 'admin';
    if (this.isAdmin) {
      this.navItems = navItemsAdmin;
    }
    else {
      this.navItems = navItems;
    }
  }

  @HostListener('unloaded')
  ngOnDestroy() {
    this.updateNav();
    console.log('destroying');
    this.navItems = [];
    this.isAdmin = false;
  }
}
