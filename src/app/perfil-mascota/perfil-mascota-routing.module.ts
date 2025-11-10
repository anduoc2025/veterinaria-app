import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PerfilMascotaPage } from './perfil-mascota.page';

const routes: Routes = [
  {
    path: ':id',
    component: PerfilMascotaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PerfilMascotaPageRoutingModule {}
