import { Injectable } from '@angular/core';

export interface User {
  email: string;
  password: string; // demo: no en producción
  name?: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private storageKey = 'app_users';
  private sessionKey = 'app_session';

  constructor() {}

  private loadUsers(): User[] {
    const raw = localStorage.getItem(this.storageKey);
    return raw ? JSON.parse(raw) : [];
  }

  private saveUsers(users: User[]) {
    localStorage.setItem(this.storageKey, JSON.stringify(users));
  }

  register(user: User): { ok: boolean; message: string } {
    const users = this.loadUsers();
    if (users.find(u => u.email === user.email)) {
      return { ok: false, message: 'El correo ya está registrado' };
    }
    users.push(user);
    this.saveUsers(users);
    return { ok: true, message: 'Usuario creado' };
  }

  login(email: string, password: string): { ok: boolean; message: string } {
    const users = this.loadUsers();
    const found = users.find(u => u.email === email && u.password === password);
    if (!found) {
      return { ok: false, message: 'Credenciales inválidas' };
    }
    localStorage.setItem(this.sessionKey, JSON.stringify({ email }));
    return { ok: true, message: 'Login OK' };
  }

  logout() {
    localStorage.removeItem(this.sessionKey);
  }

  currentUser() {
    const raw = localStorage.getItem(this.sessionKey);
    return raw ? JSON.parse(raw) : null;
  }
}
