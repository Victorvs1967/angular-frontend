import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../models/user';
import { TokenStorageService } from './token-storage.service';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient, private tokenStorageService: TokenStorageService) { }

  getUsers(): Observable<User[]> {
    const { baseUrl, users } = environment;
    const httpOption = {
      headers: new HttpHeaders({
        'authorization': 'Bearer ' + this.tokenStorageService.getToken()
      })
    };
    return this.http.get<User[]>(baseUrl + users, httpOption);
  }

  getUser(email: string): Observable<User> {
    const { baseUrl, user } = environment;
    const httpOption = {
      headers: new HttpHeaders({
        'authorization': 'Bearer ' + this.tokenStorageService.getToken()
      })
    };
    return this.http.get<User>(baseUrl + user + `/${email}`, httpOption);
  }

  updateUser(email: string): Observable<User> {
    const { baseUrl, user } = environment;
    const httpOption = {
      headers: new HttpHeaders({
        'authorization': 'Bearer ' + this.tokenStorageService.getToken()
      })
    };
    return this.http.put<User>(baseUrl + user + `/${email}`, httpOption);
  }
}
