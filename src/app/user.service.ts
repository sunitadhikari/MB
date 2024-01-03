import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  // private loginApiUrl = 'http://localhost:3000/login';
  // constructor(private http: HttpClient) {}
  // getLoginDetail(): Observable<any> {
  //   return this.http.get(this.loginApiUrl);
  // }
}
