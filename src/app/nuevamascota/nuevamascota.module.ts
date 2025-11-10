import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { NuevaMascotaPage } from './nuevamascota.page';
import { NuevaMascotaPageRoutingModule } from './nuevamascota-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    NuevaMascotaPageRoutingModule,
    NuevaMascotaPage
  ]
})
export class NuevaMascotaPageModule {}
