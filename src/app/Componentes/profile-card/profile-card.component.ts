import { Component, OnInit } from '@angular/core';
import { UserService } from '../../Services/user.service';


@Component({
  selector: 'app-profile-card',
  templateUrl: './profile-card.component.html',
  styleUrls: ['./profile-card.component.css']
})
export class ProfileCardComponent implements OnInit {

  userRole: string = '';
  userIdString: string | null = localStorage.getItem('userId');
  userId: number | null = this.userIdString ? parseInt(this.userIdString) : null;
  user: any;

  userIdString: string | null = localStorage.getItem('userId');
  userId: number | null = this.userIdString ? parseInt(this.userIdString) : null;
  user: any;
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userRole = this.userService.getUserRole();
    this.loadUser();


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
}
