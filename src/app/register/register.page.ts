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
  imports: [AppHeaderComponent, CommonModule, IonicModule, ReactiveFormsModule]
})
export class RegisterPage implements OnInit {
  form: FormGroup;
  error: string | null = null;

  constructor(private fb: FormBuilder, private auth: AuthService, public router: Router) {
    this.form = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(4)]]
    });
  }

  ngOnInit(): void {}

  submit() {
    this.error = null;
    if (this.form.invalid) {
      this.error = 'Completa los campos correctamente';
      return;
    }

    const { name, email, password } = this.form.value;
    const res = this.auth.register(name, email, password);
    if (!res.ok) {
      this.error = res.msg || 'Error al registrar';
      return;
    }

    // Al registrarse se guarda sesión automáticamente en AuthService (según implementación)
    this.router.navigate(['/home']);
  }
}
