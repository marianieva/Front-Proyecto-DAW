import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-tec-incidencia',
  templateUrl: './form-tec-incidencia.component.html',
  styleUrls: ['./form-tec-incidencia.component.css']
})
export class FormTecIncidenciaComponent implements OnInit {

  error: string = '';
  success:boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
