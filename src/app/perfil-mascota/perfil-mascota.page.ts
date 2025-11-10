import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-perfil-mascota',
  templateUrl: './perfil-mascota.page.html',
  styleUrls: ['./perfil-mascota.page.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule]
})
export class PerfilMascotaPage implements OnInit {
  mascota: any = null;

  constructor(private route: ActivatedRoute, private navCtrl: NavController) {}

  ngOnInit() {
    // Si usas routing con parámetro id, leerlo:
    const id = this.route.snapshot.paramMap.get('id') || this.route.snapshot.params['id'];
    const mascotas = JSON.parse(localStorage.getItem('mascotas') || '[]');
    if (id) {
      this.mascota = mascotas.find((m: any) => String(m.id) === String(id));
    } else {
      // fallback: mostrar primer elemento si no hay id
      this.mascota = mascotas[0] || null;
    }
  }

  volver() {
    this.navCtrl.back();
  }

  eliminar() {
    if (!this.mascota) return;
    
    const mascotas = JSON.parse(localStorage.getItem('mascotas') || '[]');
    const index = mascotas.findIndex((m: any) => String(m.id) === String(this.mascota.id));
    
    if (index !== -1) {
      mascotas.splice(index, 1);
      localStorage.setItem('mascotas', JSON.stringify(mascotas));
    }
    
    this.navCtrl.back();
  }
}
