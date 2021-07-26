import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) {}

  login(username: string, password: string) {
    const body = {
      username: username,
      password: password,
      expireTime: 60
    };
    this.http.post('/api/auth/login', body).subscribe((res: any) => {
      this.setToken(res.token);
    })
  }

  getToken() {
    return localStorage.getItem('token') ?? '';
  }

  setToken(token: string) {
    localStorage.setItem('token', token);
  }

  removeToken() {
    localStorage.removeItem('token');
  }
}
