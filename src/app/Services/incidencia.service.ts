import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Observable, throwError, of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class IncidenciaService {

  constructor(private http: HttpClient) { }

  getIncidencias(): Observable<any[]>{
    return this.http.get<any[]>('http://localhost:8087/incidencia/lista')
    .pipe(
      catchError(this.findError)
    );
  }
  
  getIncidenciasFinAdmin(): Observable<any[]>{
    return this.http.get<any[]>('http://localhost:8087/incidencia/finalizdas')
    .pipe(
      catchError(this.findError)
    );
  }

  getIncidenciasPenAdmin(): Observable<any[]>{
    return this.http.get<any[]>('http://localhost:8087/incidencia/pendientes')
    .pipe(
      catchError(this.findError)
    );
  }

  private findError(error: HttpErrorResponse) {
    console.error('Ha ocurrido un error:', error);
    return throwError('Error al recuperar los datos; inténtelo de nuevo más tarde.');
  }
  
  cancelarIncidencia(idIncidencia: number): Observable<any> {
    const url = `http://localhost:8087/incidencia/cancelar/${idIncidencia}`;
    return this.http.put(url, {});
  }

  getIncidenciasFinalizadas(idUsuario: number): Observable<any[]>{
    return this.http.get<any[]>(`http://localhost:8087/incidencia/usuario/${idUsuario}`)
    .pipe(
      switchMap(incidencias =>
        this.http.get<any[]>('http://localhost:8087/incidencia/finalizdas').pipe(
          map(finalizadas => {
            const finalizadasIds = new Set(finalizadas.map(f => f.idIncidencia));
            const incidenciasFinalizadas = incidencias.filter(i => finalizadasIds.has(i.idIncidencia));
            return incidenciasFinalizadas;
          })
        )
      ),
      catchError(this.findError)
    );
  }

  getIncidenciasPendientes(idUsuario: number): Observable<any[]>{
    return this.http.get<any[]>(`http://localhost:8087/incidencia/usuario/${idUsuario}`)
    .pipe(
      switchMap(incidencias =>
        this.http.get<any[]>('http://localhost:8087/incidencia/pendientes').pipe(
          map(finalizadas => {
            const finalizadasIds = new Set(finalizadas.map(f => f.idIncidencia));
            const incidenciasFinalizadas = incidencias.filter(i => finalizadasIds.has(i.idIncidencia));
            return incidenciasFinalizadas;
          })
        )
      ),
      catchError(this.findError)
    );
  }
  
}
