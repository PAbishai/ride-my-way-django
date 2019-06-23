import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  title = 'Ride My Way';
  logo = '/assets/images/logo.png'
  user = JSON.parse(localStorage.getItem('user'))

  constructor(private auth:AuthService) { }

  ngOnInit() {
  }

  logout(){
    this.auth.logout();
  }

}
