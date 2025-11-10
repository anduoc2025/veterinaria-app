import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NuevaMascotaPage } from './nuevamascota.page';

const routes: Routes = [
  {
    path: '',
    component: NuevaMascotaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NuevaMascotaPageRoutingModule {}
