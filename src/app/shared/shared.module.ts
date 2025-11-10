import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { AppHeaderComponent } from '../components/app-header/app-header.component';

@NgModule({
  imports: [CommonModule, IonicModule, AppHeaderComponent],
  exports: [AppHeaderComponent, CommonModule, IonicModule]
})
export class SharedModule {}
