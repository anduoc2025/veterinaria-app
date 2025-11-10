import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { RegisterPage } from './register.page';
import { SharedModule } from '../shared/shared.module';

const routes: Routes = [
  { path: '', component: RegisterPage }
];

@NgModule({
  imports: [CommonModule, IonicModule, SharedModule, ReactiveFormsModule, RouterModule.forChild(routes), RegisterPage]
})
export class RegisterModule {}
