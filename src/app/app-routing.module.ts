import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },

  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },

  {
    path: 'mascotas',
    loadChildren: () => import('./mascotas/mascotas.module').then(m => m.MascotasPageModule)
  },

  {
    path: 'nuevamascota',
    loadChildren: () => import('./nuevamascota/nuevamascota.module').then(m => m.NuevaMascotaPageModule)
  },

  {
    path: 'perfil-mascota/:id',
    loadChildren: () => import('./perfil-mascota/perfil-mascota.module').then(m => m.PerfilMascotaPageModule)
  },

  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then(m => m.LoginPageModule)
  },

  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then(m => m.RegisterPageModule)
  },

  // wildcard
  { path: '**', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
