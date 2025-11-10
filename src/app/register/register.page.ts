import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { AppHeaderComponent } from '../components/app-header/app-header.component';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule, ReactiveFormsModule, AppHeaderComponent]
})
export class RegisterPage implements OnInit {
  form: FormGroup;
  error: string | null = null;

  constructor(private fb: FormBuilder, private auth: AuthService, public router: Router) {
    this.form = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  ngOnInit() {}

  async submitRegister() {
    this.error = null;
    if (this.form.invalid) { this.error = 'Completa los campos'; return; }
    const { name, email, password } = this.form.value;

    try {
      const newUser = { id: '', name: name || '', email: email || '', password: password || '' };
      if ((this.auth as any).createUser) {
        await (this.auth as any).createUser(newUser);
      } else if ((this.auth as any).register) {
        await (this.auth as any).register(newUser);
      } else {
        throw new Error('Método de registro no implementado en AuthService: createUser/register');
      }
      this.router.navigate(['/login']);
    } catch (err: any) {
      this.error = err?.message ?? 'Error al registrarse';
    }
  }

  goToLogin() {
    this.router.navigate(['/login']);
  }
}
