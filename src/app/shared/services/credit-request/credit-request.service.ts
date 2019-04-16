import { Injectable } from '@angular/core'
import { CreditRequestModel } from '../../models/credit-request'
import { Observable } from 'rxjs'
import { HttpClient } from '@angular/common/http'
import { take } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class CreditRequestService {
  // Private
  private urlBase = 'http://localhost:3000/api/'

  constructor(private http: HttpClient) {}

  /** Credit Request */
  getAll(): Observable<any> {
    const url = `${this.urlBase}credit-requests`
    return this.http.get<any>(url).pipe(take(1))
  }

  /** Credit Request */
  save(creditRequest: CreditRequestModel): Observable<any> {
    const url = `${this.urlBase}credit-request`
    return this.http.post<any>(url, creditRequest)
  }

  /** Credit Request */
  update(creditRequest: CreditRequestModel): Observable<any> {
    const url = `${this.urlBase}credit-request/${creditRequest._id}`
    return this.http.put<any>(url, creditRequest)
  }
}
