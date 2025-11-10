import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-mascotas',
  templateUrl: './mascotas.page.html',
  styleUrls: ['./mascotas.page.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule]
})
export class MascotasPage implements OnInit {
  mascotas: any[] = [];

  constructor(private navCtrl: NavController) {}

  ngOnInit() {
    // ejemplo: cargar desde localStorage (memoria app)
    const raw = localStorage.getItem('mascotas');
    this.mascotas = raw ? JSON.parse(raw) : [];
  }

  verPerfil(mascota: any) {
    // navegar a perfil (usa routing con parámetro si está configurado)
    this.navCtrl.navigateForward(['/perfil-mascota', { id: mascota.id }]);
  }

  nuevaMascota() {
    this.navCtrl.navigateForward(['/nuevamascota']);
  }

  eliminar(index: number) {
    this.mascotas.splice(index, 1);
    localStorage.setItem('mascotas', JSON.stringify(this.mascotas));
  }
}
