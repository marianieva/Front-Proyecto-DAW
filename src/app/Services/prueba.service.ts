import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PruebaService {

  impresoras: string[] = [];

  add(impresora: string) {
    this.impresoras.push(impresora);
  }

  clear() {
    this.impresoras = [];
  }

constructor(private http: HttpClient) { }

getIncidencias(): Observable<any[]>{
  return this.http.get<any[]>('http://localhost:8087/incidencia/lista');
}
 

}
