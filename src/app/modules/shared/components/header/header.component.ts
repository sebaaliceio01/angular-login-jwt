import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  isAdmin: boolean = false
  
  @Output() toggleSidenav = new EventEmitter<void>()

  constructor() { }

  ngOnInit(): void {
  }

  onToggleSidenav(): void {
    this.toggleSidenav.emit()
  }

}
