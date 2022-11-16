import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DefaultLayoutComponent } from './containers';
import { Page404Component } from './views/pages/page404/page404.component';
import { Page500Component } from './views/pages/page500/page500.component';
import { LoginComponent } from './views/pages/login/login.component';
import { RegisterComponent } from './views/pages/register/register.component';
import { AuthGuard } from "./utils/auth.guard";
import { PasswordRecoveryComponent } from './views/pages/password-recovery/password-recovery.component';
import { SetPasswordComponent } from './views/pages/password-recovery/set-password/set-password.component';
import { Page401Component } from './views/pages/page401/page401.component';
import { ProfilComponent } from './views/pages/profil/profil.component';

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
      title: 'Accueil'
    },
    children: [
      {
        path: 'pages',
        loadChildren: () =>
          import('./views/pages/pages.module').then((m) => m.PagesModule)
      }
    ]
  },
  {
    path: '401',
    component: Page401Component,
    data: {
      title: 'Page 401'
    }
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
