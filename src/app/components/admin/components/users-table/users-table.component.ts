import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { HttpService } from 'src/app/services/http.service';
import { UsersTableDataSource } from './users-table-datasource';

@Component({
  selector: 'app-users-table',
  templateUrl: './users-table.component.html',
  styleUrls: ['./users-table.component.scss']
})
export class UsersTableComponent implements OnInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table?: MatTable<User>;

  dataSource: UsersTableDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['email', 'fullName', 'role', 'onCreated'];

  constructor(private http: HttpService, private router: Router) {
    this.dataSource = new UsersTableDataSource(this.http);
  }
  ngOnInit(): void {
    console.log(this.table);
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    if (this.table) this.table.dataSource = this.dataSource;
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table!.dataSource = this.dataSource;
  }

  onClick(event: Event) {
    console.log(event.target);
    this.router.navigate(['user']);
  }

  reload() {
    window.location.reload();
  }

}