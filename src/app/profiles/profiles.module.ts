import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';
import { AdminComponent } from './pages/admin/admin.component';
import { HomeComponent } from './pages/home/home.component';
import { OperatorComponent } from './pages/operator/operator.component';
import { UserComponent } from './pages/user/user.component';
import { ProfilesRoutingModule } from './profiles-routing.module';



@NgModule({
  declarations: [
    AdminComponent,
    OperatorComponent,
    UserComponent,
    HomeComponent,
   
  ],
  imports: [
    CommonModule,
    ProfilesRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ProfilesModule { }
