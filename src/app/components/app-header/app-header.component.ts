import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService, User } from '../../services/auth.service';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './pp-header.component.html',
  styleUrls: ['./app-header.component.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule, RouterModule]
})
export class AppHeaderComponent {
  @Input() title: string = '';

  constructor(private router: Router, public auth: AuthService) {}

  // cuando se presiona el logo
  goHome() {
    this.router.navigate(['/home']);
  }

  // navegar a login / register
  goLogin() {
    this.router.navigate(['/login']);
  }

  goRegister() {
    this.router.navigate(['/register']);
  }

  logout() {
    this.auth.logout();
    this.router.navigate(['/login']);
  }

  // getter para mostrar nombre si hay usuario
  get user(): User | null {
    return this.auth.currentUser();
  }
}
