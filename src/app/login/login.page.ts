import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { AppHeaderComponent } from '../components/app-header/app-header.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [AppHeaderComponent, CommonModule, IonicModule, ReactiveFormsModule]
})
export class LoginPage implements OnInit {
  form: FormGroup;
  error: string | null = null;

  constructor(private fb: FormBuilder, private auth: AuthService, public router: Router) {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });
  }

  ngOnInit(): void {}

  submit() {
    this.error = null;
    if (this.form.invalid) {
      this.error = 'Completa los campos';
      return;
    }

    const { email, password } = this.form.value;
    const res = this.auth.login(email, password);
    if (!res.ok) {
      this.error = res.msg || 'Credenciales inválidas';
      return;
    }

    this.router.navigate(['/home']);
  }
}
