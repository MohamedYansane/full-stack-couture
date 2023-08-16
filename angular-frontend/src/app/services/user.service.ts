import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  API_URL = 'http://localhost:8080/api/v1/';

  constructor(private http: HttpClient) {}
  getModeratorBoard(): Observable<any> {
    /*return this.httpClient.get(this.API_URL + '/clients', {
      headers: this.requestHeader,
    });*/
    return this.http.get(this.API_URL + 'moderator', { responseType: 'text' });
  }
  getAdminBoard(): Observable<any> {
    return this.http.get(this.API_URL + 'admin', { responseType: 'text' });
  }
}
