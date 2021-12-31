import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';
import { HttpService } from 'src/app/services/http.service';
import { TokenStorageService } from 'src/app/services/token-storage.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  isLogin: boolean = false;
  users: User[] = [];
  user?: User;

  constructor(private http: HttpService, private tokenStorageService: TokenStorageService, private router: Router) { }

  ngOnInit(): void {
    this.isLogin = this.tokenStorageService.isLogin();
  }

  viewMenu(): void {
    const menu = document.querySelector('.menu-list-row');
    menu?.classList.toggle('active');
  }

  login() {
    this.isLogin = this.tokenStorageService.isLogin();
    this.router.navigate(['login']);
  }

  logout() {
    this.tokenStorageService.logout();
    this.isLogin = this.tokenStorageService.isLogin();
    this.router.navigate(['home']);
  }

  getUsers() {
    this.router.navigate(['users']);
  }

  getUser() {
    this.router.navigate(['user']);
  }

}
