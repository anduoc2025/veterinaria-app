import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';  // <-- importa Routes aquí
import { HomePage } from './home.page';                   // <-- componente local

const routes: Routes = [
  {
    path: '',
    component: HomePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomePageRoutingModule {}
