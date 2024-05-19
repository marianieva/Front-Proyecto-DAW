import { Component, OnInit } from '@angular/core';
import { UserService } from '../../Services/user.service';


@Component({
  selector: 'app-profile-card',
  templateUrl: './profile-card.component.html',
  styleUrls: ['./profile-card.component.css']
})
export class ProfileCardComponent implements OnInit {

  userRole: string = '';

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userRole = this.userService.getUserRole();
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
