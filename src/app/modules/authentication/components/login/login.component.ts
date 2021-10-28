import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  username: FormControl = new FormControl()
  password: FormControl = new FormControl()
  int: FormControl = new FormControl()

  form: FormGroup = new FormGroup({
    username: this.username,
    password: this.password,
    int: this.int
  })

  constructor(
    private authService: AuthService,
    private router: Router
  ) { 
   }

  ngOnInit(): void {
    this.onLogin
  }

  onLogin() {
    this.authService.login(this.form.value).subscribe( res => {
      if( res ) {
        this.router.navigate([''])
      }
    })
  }

}
