import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Services/auth.service';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-form-modificar-usuario',
  templateUrl: './form-modificar-usuario.component.html',
  styleUrls: ['./form-modificar-usuario.component.css']
})
export class FormModificarUsuarioComponent implements OnInit {

  idUsuario  = Number(localStorage.getItem('userId'));
  nombre: string = '';
  apellidos:string = ''
  username: string = '';
  direccion: string = '';

  constructor(private userService: UserService,private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  updateUser2(): void{
    this.userService.updateUser({
      idUsuario: this.idUsuario,
      username: this.username,
      nombre: this.nombre,
      apellidos: this.apellidos,
      direccion: this.direccion}).subscribe({
        next: response => {
          this.authService.logout
          this.router.navigate(['login'])
        }
      });
    }
}git 
