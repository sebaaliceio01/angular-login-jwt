import { Component, OnInit } from '@angular/core';
import { IUser } from 'src/app/interfaces/user.interface';
import { AuthService } from 'src/app/modules/authentication/services/auth.service';
import { LocalStorageServiceService } from 'src/app/modules/authentication/services/local-storage-service.service';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss'],
})
export class PagesComponent implements OnInit {
  constructor(
    public authService: AuthService,
    private _localStorageService: LocalStorageServiceService
  ) {}

  user: IUser

  myInfo$ = this._localStorageService.userData$;

  ngOnInit(): void {
     this.user = JSON.parse(localStorage.getItem('user') || '')
    console.log(this.user)
  }
}
