import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from 'src/app/services/token-storage.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  isAdmin = false;

  constructor(private tokenStorage: TokenStorageService) { }

  ngOnInit(): void {
    this.isAdmin = this.tokenStorage.getEmail() === 'admin@mail.me';
  }

}
