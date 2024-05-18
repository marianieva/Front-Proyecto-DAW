import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-cli-incidencias',
  templateUrl: './cli-incidencias.component.html',
  styleUrls: ['./cli-incidencias.component.css']
})
export class CliIncidenciasComponent implements OnInit {

  userRole: string = '';

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userRole = this.userService.getUserRole();
  }
}
