import { Component, OnInit } from '@angular/core';
import { UserService } from '../../Services/user.service';

@Component({
  selector: 'app-form-modificar-usuario',
  templateUrl: './form-modificar-usuario.component.html',
  styleUrls: ['./form-modificar-usuario.component.css']
})
export class FormModificarUsuarioComponent implements OnInit {

  userIdString: string | null = localStorage.getItem('userId');
  userId: number | null = this.userIdString ? parseInt(this.userIdString) : null;
  user: any = {};
  username: string = '';
  nombre: string = '';
  apellidos:string = '';
  direccion: string = '';

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.loadUser();
  }

  loadUser(): void {
    if (this.userId !== null) {
      this.userService.getUser(this.userId).subscribe({
        next: (data) => {
          this.user = data;
          console.log(data); // Maneja la respuesta
          // Aquí puedes manejar los datos del usuario si es necesario
        },
        error: (err) => {
          console.error(err); // Maneja el error
        }
      });
    }
  }

  updateUser(): void {
    this.userService.updateUser({
      nombre: this.nombre,
      apellidos: this.apellidos,
      username: this.username,
      direccion: this.direccion}).subscribe({
      next: (data) => {
        console.log(data); // Maneja la respuesta
        // Aquí puedes manejar la respuesta si es necesario
      },
      error: (err) => {
        console.error(err); // Maneja el error
      }
    });
  }

}
