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

  getToken(): string | undefined {
    const token = sessionStorage.getItem(AUTH_TOKEN_KEY);
    return token !== null ? token : undefined;
  }

  setEmail(email: string) {
    window.sessionStorage.removeItem(AUTH_EMAIL_KEY);
    window.sessionStorage.setItem(AUTH_EMAIL_KEY, email);
  }

  getEmail(): string | undefined {
    const email = sessionStorage.getItem(AUTH_EMAIL_KEY);    
    return email !== null ? email : undefined;
  }

  logout() {
    window.sessionStorage.clear();
  }

  isLogin(): boolean {
    return this.getToken() !== undefined;
  }
}
