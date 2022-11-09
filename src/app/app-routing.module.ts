import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DefaultLayoutComponent } from './containers';
import { Page404Component } from './views/pages/page404/page404.component';
import { Page500Component } from './views/pages/page500/page500.component';
import { LoginComponent } from './views/pages/login/login.component';
import { RegisterComponent } from './views/pages/register/register.component';
import { AuthGuard } from "./utils/auth.guard";
import { LibraryComponent } from './views/pages/library/library.component';
import { PasswordRecoveryComponent } from './views/pages/password-recovery/password-recovery.component';
import { SetPasswordComponent } from './views/pages/password-recovery/set-password/set-password.component';
import { ListUserComponent } from './views/admin/list-user/list-user.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'Library',
    pathMatch: 'full'
  },
  {
    path: '',
    component: DefaultLayoutComponent,
    canActivate: [AuthGuard],
    data: {
      title: 'Home'
    },
    children: [
      {
        path: 'pages',
        canActivate: [AuthGuard],
        loadChildren: () =>
          import('./views/pages/pages.module').then((m) => m.PagesModule)
      }
    ]
  },
  {
    path: '404',
    component: Page404Component,
    data: {
      title: 'Page 404'
    }
  },
  {
    path: '500',
    component: Page500Component,
    data: {
      title: 'Page 500'
    }
  },
  {
    path: 'login',
    component: LoginComponent,
    data: {
      title: 'Login Page'
    },
  },
  {
    path: 'register',
    component: RegisterComponent,
    data: {
      title: 'Register Page'
    }
  },
  {
    path: 'library',
    canActivate: [AuthGuard],
    component: LibraryComponent,
    data: {
      title: 'Library'
    },
  },
  {
    path: 'admin/users',
    canActivate: [AuthGuard],
    component: ListUserComponent,
    data: {
      title: 'Utilisateurs',
      //role: 'admin'
    },
  },
  {
    path: 'login',
    component: LoginComponent,
    data: {
      title: 'Login Page'
    }
  },

  {
    path: 'password-recovery',
    component: PasswordRecoveryComponent,
    data: {
      title: 'Récupération de mot de passe'
    }
  },
  {
    path: 'password-reset',
    component: SetPasswordComponent,
    data: {
      title: 'Récupération de mot de passe'
    }
  },
  
  {path: '**', redirectTo: '404'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'top',
      anchorScrolling: 'enabled',
      initialNavigation: 'enabledBlocking',
      onSameUrlNavigation: 'reload'
      // relativeLinkResolution: 'legacy'
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
