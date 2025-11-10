import { Injectable } from '@angular/core';

export interface User {
  id: string;
  name: string;
  email: string;
  password: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private USERS_KEY = 'pc_users';
  private CURRENT_KEY = 'pc_current_user';

  constructor() {}

  private readUsers(): User[] {
    const raw = localStorage.getItem(this.USERS_KEY);
    return raw ? JSON.parse(raw) as User[] : [];
  }

  private saveUsers(users: User[]) {
    localStorage.setItem(this.USERS_KEY, JSON.stringify(users));
  }

  register(name: string, email: string, password: string): { ok: boolean; msg?: string } {
    const users = this.readUsers();
    if (users.find(u => u.email.toLowerCase() === email.toLowerCase())) {
      return { ok: false, msg: 'El correo ya está registrado' };
    }
    const id = Date.now().toString();
    const newUser: User = { id, name, email, password };
    users.push(newUser);
    this.saveUsers(users);
    localStorage.setItem(this.CURRENT_KEY, JSON.stringify(newUser));
    return { ok: true };
  }

  login(email: string, password: string): { ok: boolean; msg?: string } {
    const users = this.readUsers();
    const user = users.find(u => u.email.toLowerCase() === email.toLowerCase() && u.password === password);
    if (!user) return { ok: false, msg: 'Credenciales inválidas' };
    localStorage.setItem(this.CURRENT_KEY, JSON.stringify(user));
    return { ok: true };
  }

  logout() {
    localStorage.removeItem(this.CURRENT_KEY);
  }

  currentUser(): User | null {
    const raw = localStorage.getItem(this.CURRENT_KEY);
    return raw ? JSON.parse(raw) as User : null;
  }

  isAuthenticated(): boolean {
    return this.currentUser() !== null;
  }
}
