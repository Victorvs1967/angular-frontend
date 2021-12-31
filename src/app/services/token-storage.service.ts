import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

const { AUTH_TOKEN_KEY, AUTH_EMAIL_KEY } = environment;

@Injectable({
  providedIn: 'root'
})
export class TokenStorageService {

  constructor() { }

  setToken(token: string) {
    window.sessionStorage.removeItem(AUTH_TOKEN_KEY);
    window.sessionStorage.setItem(AUTH_TOKEN_KEY, token);
  }

  getToken(): string | null {
    return sessionStorage.getItem(AUTH_TOKEN_KEY);
  }

  setEmail(email: string) {
    window.sessionStorage.removeItem(AUTH_EMAIL_KEY);
    window.sessionStorage.setItem(AUTH_EMAIL_KEY, email);
  }

  getEmail(): string | null {
    return sessionStorage.getItem(AUTH_EMAIL_KEY);
  }

  logout() {
    window.sessionStorage.clear();
  }

  isLogin(): boolean {
    return this.getToken() !== null;
  }
}
