import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { TokenStorageService } from 'src/app/services/token-storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  message?: string;

  email = new FormControl('', [ Validators.required ]);
  password = new FormControl('', [ Validators.required ]);

  constructor(private auth: AuthService, private tokenStorageService: TokenStorageService, private router: Router) { }

  ngOnInit(): void {
  }

  login(event: Event) {
    event.preventDefault();
    const email = this.email.value;
    this.auth.login(email, this.password.value).subscribe(() => this.reload());
    this.email.reset();
    this.password.reset();
    (email === 'admin@mail.me') ? this.router.navigate(['admin']) : this.router.navigate(['home']);
  }

  signup() {
    this.router.navigate(['signup']);
  }

  reload() {
    window.location.reload();
  }

}
