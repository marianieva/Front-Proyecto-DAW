import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-cli-incidencia',
  templateUrl: './form-cli-incidencia.component.html',
  styleUrls: ['./form-cli-incidencia.component.css']
})
export class FormCliIncidenciaComponent implements OnInit {

  error: string = '';
  success:boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
