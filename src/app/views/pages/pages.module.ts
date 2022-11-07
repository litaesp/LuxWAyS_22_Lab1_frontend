import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { Page404Component } from './page404/page404.component';
import { Page500Component } from './page500/page500.component';
import { ButtonModule, CardModule, FormModule, GridModule, ToastModule } from '@coreui/angular';
import { IconModule } from '@coreui/icons-angular';
import { ReactiveFormsModule } from '@angular/forms';
import { LibraryComponent } from './library/library.component';
import { SecretpageComponent } from './secretpage/secretpage.component';


@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    Page404Component,
    Page500Component,
    LibraryComponent,
    SecretpageComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    CardModule,
    ReactiveFormsModule,
    ButtonModule,
    GridModule,
    IconModule,
    FormModule,
    ToastModule
  ]
})
export class PagesModule {
}
