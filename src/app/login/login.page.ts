import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { AppHeaderComponent } from '../components/app-header/app-header.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule, ReactiveFormsModule, AppHeaderComponent]
})
export class LoginPage implements OnInit {
  form: FormGroup;
  error: string | null = null;

  constructor(private fb: FormBuilder, private auth: AuthService, public router: Router) {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  ngOnInit() {}

  async submit() {
    this.error = null;
    if (this.form.invalid) { this.error = 'Completa los campos'; return; }
    const { email, password } = this.form.value;
    try {
      // Llamar con los 2 argumentos que espera el servicio
      await this.auth.login(email || '', password || '');
      this.router.navigate(['/home']);
    } catch (err: any) {
      this.error = err?.message ?? 'Error al iniciar sesión';
    }
  }

  goToRegister() {
    this.router.navigate(['/register']);
  }
}
