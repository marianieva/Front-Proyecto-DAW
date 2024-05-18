import { Component, OnInit } from '@angular/core';
import { UserService } from '../../Services/user.service';

@Component({
  selector: 'app-cli-usuario',
  templateUrl: './cli-usuario.component.html',
  styleUrls: ['./cli-usuario.component.css']
})
export class CliUsuarioComponent implements OnInit {
  
  userRole: string = '';

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userRole = this.userService.getUserRole();
  }

}
