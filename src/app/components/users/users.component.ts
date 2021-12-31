import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  @Input()
  users: User[] = [];
  displayedColumns = ['email', 'fullName', 'role'];

  constructor(private http: HttpService) { }

  ngOnInit(): void {
    this.http.getUsers().subscribe(users => {
      users.forEach(user => {
        this.users = [ user, ...this.users ];
      })
    });
  }

}
