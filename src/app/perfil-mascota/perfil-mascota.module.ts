import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { PerfilMascotaPage } from './perfil-mascota.page';
import { PerfilMascotaPageRoutingModule } from './perfil-mascota-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PerfilMascotaPageRoutingModule,
    PerfilMascotaPage
  ]
})
export class PerfilMascotaPageModule {}
