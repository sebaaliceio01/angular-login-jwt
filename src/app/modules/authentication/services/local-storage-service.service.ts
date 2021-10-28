import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IUser } from 'src/app/interfaces/user.interface';
import { LocalStorageRefService } from './local-storage-ref.service';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageServiceService {

  private _localStorage: Storage

  constructor(
    private _localStorageRefService: LocalStorageRefService,
  ) { 
    this._localStorage = this._localStorageRefService.localStorage
   }

  private _userData$ = new BehaviorSubject<IUser | null>(null)
  public userData$ = this._userData$.asObservable()

  setInfo(user: IUser) {
    const userData = JSON.stringify(user)
    this._localStorage.setItem('user', userData)
    this._userData$.next(user)
  }

  loadInfo() {
    const user = JSON.parse(this._localStorage.getItem('user') || '{}')
    this._userData$.next(user)
  }

  clearInfo() {
    this._localStorage.removeItem('user')
    this._userData$.next(null)
  }

  clearAllLocalStorage() {
    this._localStorage.clear()
    this._userData$.next(null)
  }


}
