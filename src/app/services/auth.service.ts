import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { User } from '../models/user';
import { TokenStorageService } from './token-storage.service';

const { baseUrl, login, signup } = environment;

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, private tokenStorageService: TokenStorageService) { }

  login(email: string, password: string): Observable<any> {
    return this.http.post<Response>(baseUrl + login, { email: email, password: password})
      .pipe(map((data: any) => {
        this.tokenStorageService.setEmail(email);
        this.tokenStorageService.setToken(data);
      }));
  }

  signup(user: User): Observable<User> {
    return this.http.post<User>(baseUrl + signup, user);
  }
}
