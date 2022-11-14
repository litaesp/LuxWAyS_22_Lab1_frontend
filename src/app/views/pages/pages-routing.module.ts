import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Page404Component } from './page404/page404.component';
import { Page500Component } from './page500/page500.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { LibraryComponent } from './library/library.component';
import { SecretpageComponent } from './secretpage/secretpage.component';
import { ListUserComponent } from '../admin/list-user/list-user.component';
import { AddBookComponent } from './library/add-book/add-book.component';
import { AuthGuard } from 'src/app/utils/auth.guard';
import { ProfilComponent } from './profil/profil.component';

const routes: Routes = [
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
    }
  },
  {
    path: 'library',
    component: LibraryComponent,
    canActivate: [AuthGuard],
    data: {
      title: 'Bibliotheque'
    }
  },
  {
    path: 'library/create',
    canActivate: [AuthGuard],
    component: AddBookComponent,
    data: {
      title: 'Nouveau projet'
    }
  },
  {
    path: 'register',
    component: RegisterComponent,
    canActivate: [AuthGuard],
    data: {
      title: 'Register Page'
    }
  },
  {
    path: 'profil/:id',
    canActivate: [AuthGuard],
    component: ProfilComponent,
    data: {
      title: 'Profile'
    }
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
    path: 'blog/topsecret/upcoming/event/cybersecurite-2023',
    component: SecretpageComponent,
    data: {
      title: 'cybersecurite-2023'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)] ,
  exports: [RouterModule]
})
export class PagesRoutingModule {
}
