import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/modules/authentication/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  isAdmin = ''
  isLogged = false
  
  @Output() toggleSidenav = new EventEmitter<void>()

  constructor(
    public authService: AuthService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.authService.IsLogged.subscribe(res => this.isLogged = res)
    this.authService.isAdmin$.subscribe(res => this.isAdmin = res)
  }

  logout() {
    this.authService.logout()
    this.router.navigate(['login'])
  }

  onToggleSidenav(): void {
    this.toggleSidenav.emit()
  }

}
