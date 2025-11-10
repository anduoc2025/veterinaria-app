import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { MascotasPage } from './mascotas.page';
import { MascotasPageRoutingModule } from './mascotas-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MascotasPageRoutingModule,
    MascotasPage
  ]
})
export class MascotasPageModule {}
