import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { HttpService } from 'src/app/services/http.service';
import { TokenStorageService } from 'src/app/services/token-storage.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  email?: string;
  user?: User;

  constructor(private http: HttpService, private tokenStorageService: TokenStorageService) { }

  ngOnInit(): void {
    this.email = this.tokenStorageService.getEmail();
    if (this.email) this.http.getUser(this.email).subscribe(user => this.user = user);
  }

}
