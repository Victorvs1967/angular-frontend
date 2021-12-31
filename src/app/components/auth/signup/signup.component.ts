import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  isSignup: boolean = false;
  message?: string;

  email = new FormControl('', [ Validators.required ]);
  password = new FormControl('', [ Validators.required ]);
  firstName = new FormControl('', null);
  lastName = new FormControl('', null);

  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  login() {
    this.router.navigate(['login']);
  }

  signup(event: Event) {
    event.preventDefault();
    const user: User = new User();
    user.email = this.email.value;
    user.password = this.password.value;
    user.firstName = this.firstName.value ? this.firstName.value : '';
    user.lastName = this.lastName.value ? this.lastName.value : '';
    this.auth.signup(user).subscribe(() => {
      this.message = 'User created successfully.';
      this.isSignup = true;
    }, () => {
      this.message = 'User not created.';
      this.isSignup = false;
    });
  }
}
