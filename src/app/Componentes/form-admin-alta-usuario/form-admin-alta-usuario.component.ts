import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-form-admin-alta-usuario',
  templateUrl: './form-admin-alta-usuario.component.html',
  styleUrls: ['./form-admin-alta-usuario.component.css']
})
export class FormAdminAltaUsuarioComponent{

  nombre: string = '';
  apellidos:string = ''
  username: string = '';
  password: string = '';
  roles: Array<string> = [];
  zona: number = 0;
  direccion: string = '';

  constructor(private authService: AuthService, private router: Router) { }

  
    signUp(): void{
      this.authService.signUp({
        nombre: this.nombre,
        apellidos: this.apellidos,
        username: this.username,
        password: this.password,
        roles: this.roles,
        zona: this.zona,
        direccion: this.direccion}).subscribe({
          next: response => {
            this.router.navigate(['/'])
          }
        });
  }

  ngOnInit(): void {
  }

}
