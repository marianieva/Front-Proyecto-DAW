import { Component, OnInit } from '@angular/core';
import { UserService } from '../../Services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  userRole: string = '';

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userRole = this.userService.getUserRole();
  }

}
