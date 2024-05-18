import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-cli-pedidos',
  templateUrl: './cli-pedidos.component.html',
  styleUrls: ['./cli-pedidos.component.css']
})
export class CliPedidosComponent implements OnInit {

  userRole: string = '';

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userRole = this.userService.getUserRole();
  }
  
}
