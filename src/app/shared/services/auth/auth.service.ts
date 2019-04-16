import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { HttpClient } from '@angular/common/http'
import { UserModel } from '../../models/user'

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // Private
  private urlBase = 'http://localhost:3000/api/'

  constructor(private http: HttpClient) {}

  /** Signup */
  signup(user: UserModel): Observable<any> {
    const url = `${this.urlBase}signup`
    return this.http.post<any>(url, user)
  }

  /** Signup */
  login(user: UserModel): Observable<any> {
    const url = `${this.urlBase}signin`
    return this.http.post<any>(url, user)
  }

  /** Update User */
  update(user: UserModel): Observable<any> {
    const url = `${this.urlBase}user/${user.id}`
    return this.http.put<any>(url, user)
  }
}
