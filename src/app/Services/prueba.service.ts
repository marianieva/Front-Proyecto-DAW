import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PruebaService {

constructor(private http: HttpClient) { }

getIncidencias(): Observable<any[]>{
  return this.http.get<any[]>('http://localhost:8087/incidencia/lista')
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

}
