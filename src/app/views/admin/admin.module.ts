import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListUserComponent } from './list-user/list-user.component';
import { IconModule } from '@coreui/icons-angular';
import { CardModule, GridModule } from '@coreui/angular';



@NgModule({
  declarations: [
    ListUserComponent
  ],
  imports: [
    CommonModule,
    IconModule,
    CardModule,
    GridModule
  ]
})
export class AdminModule { }
