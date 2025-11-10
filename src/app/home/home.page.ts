import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { AppHeaderComponent } from '../components/app-header/app-header.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule, AppHeaderComponent]
})
export class HomePage {
  constructor(private router: Router) {}

  verMascotas() { this.router.navigate(['/mascotas']); }
  nuevaMascota() { this.router.navigate(['/nuevamascota']); }
}
