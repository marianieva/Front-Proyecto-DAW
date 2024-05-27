import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-admin-impresora',
  templateUrl: './form-admin-impresora.component.html',
  styleUrls: ['./form-admin-impresora.component.css']
})
export class FormAdminImpresoraComponent implements OnInit {

  error: string = '';
  success:boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
