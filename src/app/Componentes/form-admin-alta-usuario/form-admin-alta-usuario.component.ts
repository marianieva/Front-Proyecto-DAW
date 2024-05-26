import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Services/auth.service';
import { UserService } from 'src/app/Services/user.service';

interface Rol {
  idRol: number;
  rolNombre: string;
}

interface Zona {
  idZona: number;
  nombreZona: string;
}

@Component({
  selector: 'app-form-admin-alta-usuario',
  templateUrl: './form-admin-alta-usuario.component.html',
  styleUrls: ['./form-admin-alta-usuario.component.css']
})
export class FormAdminAltaUsuarioComponent{

  error: string = '';

  nombre: string = '';
  apellidos:string = '';
  username: string = '';
  password: string = '';
  roles: Array<string> = [];
  zona: number = 0;
  direccion: string = '';

  todosRoles: Array<Rol> = [];
  todasZonas: Array<Zona> = [];

  constructor(private authService: AuthService, private router: Router, private userService: UserService) { }

  
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
    this.getRoles();
    this.getZonas();
  }

  getRoles(): void {
    this.userService.getRoles().subscribe({
      next: (data: Rol[]) => {
        this.todosRoles = data.filter(role => role.rolNombre !== 'ROL_INVITADO');
      },
      error: (err) => {
        this.error = err;
      }
    });
  }

  getRoleLabel(rolNombre: string): string {
    switch (rolNombre) {
      case 'ROL_CLIENTE':
        return 'Cliente';
      case 'ROL_TECNICO':
        return 'Tecnico';
      case 'ROL_ADMIN':
        return 'Administrador';
      case 'ROL_INVITADO':
        return 'Invitado';
      default:
        return rolNombre;
    }
  }

  getZonas(): void {
    this.userService.getZonas().subscribe({
      next: (data: Zona[]) => {
        this.todasZonas = data;
      },
      error: (err) => {
        this.error = err;
      }
    });
  }

}
