import { Component, OnInit } from '@angular/core';
import { PruebaService } from '../Services/prueba.service';

@Component({
  selector: 'app-aa-prueba-back',
  templateUrl: './aa-prueba-back.component.html',
  styleUrls: ['./aa-prueba-back.component.css']
})
export class AaPruebaBackComponent implements OnInit {

  incidencias: any[] = [];

  constructor(public service: PruebaService) { }

  ngOnInit(){
    this.service.getIncidencias().subscribe((data: any[]) => {
      this.incidencias = data;
    });
  }
  
}
