import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { IUser } from 'src/app/interfaces/user.interface';
import { environment } from 'src/environments/environment';
import { catchError, map } from 'rxjs/operators'
import { JwtHelperService } from '@auth0/angular-jwt';
import { Role } from 'src/app/interfaces/role.type';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  private loggedIn = new BehaviorSubject<boolean>(false)
  private role = new BehaviorSubject<Role | null>(null)
 
  helper = new JwtHelperService()

  constructor(
    private http: HttpClient,
  ) {
    this.checkToken()
   }

   get IsLogged(): Observable<boolean> {
     return this.loggedIn.asObservable()
   }

   get isAdmin$(): Observable<any> { return this.role.asObservable() }

  login(authData: IUser): Observable<any> {
    return this.http.post<IUser>(`${environment.API_URL}/auth/login`, authData)
    .pipe(
      map((res: IUser) => {
        //saveToken
        this.saveToken(res)
        this.loggedIn.next(true)
        return res
      }),
      catchError((err) => this.handlerError(err))
    )
  }

  logout() {
    localStorage.removeItem('user')
    this.loggedIn.next(false)
  }

  private checkToken(): void {
    const user = localStorage.getItem('user')

    if (user) {
      const isExpired = this.helper.isTokenExpired(user)
      if (isExpired) {
        this.logout()
      } else {
        this.loggedIn.next(true)
        this.role.next
      }
    }

   // const isExpired = this.helper.isTokenExpired(userToken || undefined)
   // console.log(isExpired)

    // isExpired ? this.logout() : this.loggedIn.next(true)

    // if (isExpired) {
    //   this.logout()
    // } else {
    //   this.loggedIn.next(true)
    // }

   // const userIsLogged = isExpired
  }

  private saveToken(user: IUser) {
    //localStorage.setItem('token', user.token)
    const {userId, message, ...rest} = user
    localStorage.setItem('user', JSON.stringify(rest))
  }
  
  private handlerError(err:string): Observable<never> {
    let errorMessage = 'An error ocurred'
    if (err) {
      errorMessage = `Error: code ${errorMessage}`
    }
    return throwError(errorMessage)
  }
}
