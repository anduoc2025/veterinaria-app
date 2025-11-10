import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-nuevamascota',
  templateUrl: './nuevamascota.page.html',
  styleUrls: ['./nuevamascota.page.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule, ReactiveFormsModule]
})
export class NuevaMascotaPage implements OnInit {
  mascotaForm: FormGroup;

  constructor(private fb: FormBuilder, private navCtrl: NavController) {
    // inicializamos el form para evitar el error TS2564
    this.mascotaForm = this.fb.group({
      nombre: ['', Validators.required],
      tipo: ['Perro', Validators.required],
      edad: [0, [Validators.required, Validators.min(0)]],
      peso: [0, [Validators.required, Validators.min(0)]],
      raza: [''],
      color: [''],
      motivo: ['']
    });
  }

  ngOnInit() {}

  guardar() {
    if (this.mascotaForm.invalid) return;
    const mascotas = JSON.parse(localStorage.getItem('mascotas') || '[]');
    const nueva = { id: Date.now(), ...this.mascotaForm.value };
    mascotas.push(nueva);
    localStorage.setItem('mascotas', JSON.stringify(mascotas));
    this.navCtrl.back();
  }

  cancelar() {
    this.navCtrl.back();
  }
}
