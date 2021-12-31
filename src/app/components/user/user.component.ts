import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { HttpService } from 'src/app/services/http.service';
import { TokenStorageService } from 'src/app/services/token-storage.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  user?: User;

  constructor(private http: HttpService, private tokenStorageService: TokenStorageService) { }

  ngOnInit(): void {
    const email = this.tokenStorageService.getEmail();
    if (email) {
      this.http.getUser(email).subscribe(user => this.user = user);
    }
  }

}
