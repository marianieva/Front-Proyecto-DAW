import { Component, OnInit } from '@angular/core';
import { UserService } from '../../Services/user.service';

@Component({
  selector: 'app-form-cli-alta-pedido',
  templateUrl: './form-cli-alta-pedido.component.html',
  styleUrls: ['./form-cli-alta-pedido.component.css']
})
export class FormCliAltaPedidoComponent implements OnInit {

  userRole: string = '';
  error: string = '';
  success:boolean = false;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userRole = this.userService.getUserRole();
  }
}
