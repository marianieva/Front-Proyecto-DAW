import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl = 'http://localhost:8087';

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  login(credentials: {username: string, password: string}): Observable<any>{
    return this.http.post<any>(`${this.baseUrl}/auth/login`, credentials)
    .pipe(map(response => {
      if(response && response.token){
        localStorage.setItem('authToken', response.token);
        localStorage.setItem('userId', response.username);
        localStorage.setItem('roles', response.roles);
      }
      return response;
    }));
  }

  signUp(datos: {nombre: string, 
                apellidos: string, 
                username: string,
                password: string,
                roles: Array<string>,
                zona: number,
                direccion: string
              }): Observable<any>{
                return this.http.post<any>(`${this.baseUrl}/auth/nuevo`, datos)
              }

  logout(): void {
    localStorage.removeItem('authToken');
    localStorage.removeItem('userId');
    localStorage.removeItem('roles');
    this.router.navigate(['/login']);
  }

  getToken(): string | null {
    return localStorage.getItem('authToken');
  }

  isAuthenticated(): boolean {
    return !!localStorage.getItem('authToken');;
  }


}
