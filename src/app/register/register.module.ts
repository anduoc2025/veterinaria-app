import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  { path: '', loadComponent: () => import('./register.page').then(m => m.RegisterPage) }
];

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, IonicModule, RouterModule.forChild(routes)]
})
export class RegisterPageModule {}
