import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  getUsers(): Observable<User[]> {
    const { baseUrl, users } = environment;
    return this.http.get<User[]>(baseUrl + users);
  }

  getUser(email: string): Observable<User> {
    const { baseUrl, user } = environment;
    return this.http.get<User>(baseUrl + user + `/${email}`);
  }

  updateUser(data: User): Observable<User> {
    const { baseUrl, user } = environment;
    return this.http.put<User>(baseUrl + user, data);
  }

  deleteUser(email: string): Observable<any> {
    const { baseUrl, user } = environment;
    return this.http.delete<User>(baseUrl + user + `/${email}`);
  }
}
