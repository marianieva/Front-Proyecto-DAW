import { Component, OnInit, ViewChildren, QueryList, ElementRef } from '@angular/core';
import { IncidenciaService } from '../../Services/incidencia.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-table-tec-incidencias-fin',
  templateUrl: './table-tec-incidencias-fin.component.html',
  styleUrls: ['./table-tec-incidencias-fin.component.css'],
  providers: [DatePipe]
})
export class TableTecIncidenciasFinComponent implements OnInit {

  incidencias: any[] = []; // Para cargar el array con el JSON que devuelva la petición GET
  loading = true; // Para mostrar mensaje de carga de datos en el HTML
  error = ''; // Para manejar los errores en la carga de datos de la petición GET
  idUsuario: number = 2;


  @ViewChildren('btnCancelar') btnCancelar!: QueryList<ElementRef>;

  constructor(public service: IncidenciaService, private datePipe: DatePipe) { }

  ngOnInit(): void {
    this.getIncidenciasFinalizadas();
  }

  getIncidenciasFinalizadas() {
    this.loading= true;
    this.service.getIncidenciasFinalizadas(this.idUsuario).subscribe({
      next: (data: any[]) => {
        this.incidencias = data.map(incidencia => {
          incidencia.fechaFin = this.datePipe.transform(incidencia.fechaFin, 'dd-MM-yyyy HH:mm'),
          incidencia.fechaInicio = this.datePipe.transform(incidencia.fechaInicio, 'dd-MM-yyyy HH:mm');
          return incidencia;
        });
        this.loading = false; // Finaliza la carga
      },
      error: (err) => {
        this.error = err; // Asigna el mensaje de error
        this.loading = false; // Finaliza la carga
      }
    });
  }
  
}
