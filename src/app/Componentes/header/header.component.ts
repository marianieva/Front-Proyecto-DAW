import { Component, OnInit } from '@angular/core';
import { UserService } from '../../Services/user.service';
import { AuthService } from 'src/app/Services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  userRole: string = '';

  constructor(private userService: UserService, private authService: AuthService) { }

  ngOnInit(): void {
    this.userRole = this.userService.getUserRole();
  }

  logout(): void {
    this.authService.logout(); // Llamar al método logout del servicio de autenticación
  }

  

}
