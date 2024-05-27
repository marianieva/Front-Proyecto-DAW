import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-admin-incidencia',
  templateUrl: './form-admin-incidencia.component.html',
  styleUrls: ['./form-admin-incidencia.component.css']
})
export class FormAdminIncidenciaComponent implements OnInit {

  error: string = '';
  success:boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
