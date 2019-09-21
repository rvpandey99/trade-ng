import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({ providedIn: 'root' })
export class AuthService {
  public jwtHelper = new JwtHelperService();
  constructor(private _http: HttpClient) { }

  register(body:any) {
    return this._http.post('https://trade-ravi.herokuapp.com/register',body,{observe:'body'});
  }

  login(body:any) {
    return this._http.post('https://trade-ravi.herokuapp.com/login',body,{observe:'body'});
  }

  public isAuthenticated(): boolean {
    const token = localStorage.getItem('token');
    return !this.jwtHelper.isTokenExpired(token);
  }

}