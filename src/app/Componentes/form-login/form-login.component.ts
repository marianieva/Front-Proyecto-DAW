import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.css']
})
export class FormLoginComponent{

  username: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private authService: AuthService, private router: Router) { }

  login(): void {
    this.authService.login({ username: this.username, password: this.password }).subscribe({
      next: response => {
        this.router.navigate(['/']);
      },
      error: err => {
        this.errorMessage = 'Login failed. Please check your username and password.';
        console.error('Login failed', err);
      }
    });
  }

  showModal: boolean = false;
  modalType: 'profile' | 'password' = 'profile';

  openModal() {
    this.modalType = 'profile';
    this.showModal = true;
  }

  openModalPass() {
    this.modalType = 'password';
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
  }
}
