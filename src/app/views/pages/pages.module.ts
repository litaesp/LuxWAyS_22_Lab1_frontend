import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropdownModule } from '@coreui/angular';

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
import { PasswordRecoveryComponent } from './password-recovery/password-recovery.component';
import { SetPasswordComponent } from './password-recovery/set-password/set-password.component';

@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    Page404Component,
    Page500Component,
    LibraryComponent,
    PasswordRecoveryComponent,
    SecretpageComponent,
    SetPasswordComponent
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
    DropdownModule,
    ToastModule
  ]
})
export class PagesModule {
}
