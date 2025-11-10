import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginPage } from './login.page';
import { SharedModule } from '../shared/shared.module';

const routes: Routes = [
  { path: '', component: LoginPage }
];

@NgModule({
  imports: [CommonModule, IonicModule, SharedModule, ReactiveFormsModule, RouterModule.forChild(routes), LoginPage]
})
export class LoginModule {}
