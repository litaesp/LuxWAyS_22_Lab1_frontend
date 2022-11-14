import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UsersService } from '../services/api/users.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    public authService: UsersService,
    public router: Router
  ) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if (this.authService.isLoggedIn !== true) {
        this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
        return false;
      }
      else {
        const userRole = this.authService.getRole();
        if (route.data['role'] && route.data['role'].indexOf(userRole) === -1) {
          this.router.navigate(['401']);
          return false;
        }
        return true;
      }
  }
  
}
