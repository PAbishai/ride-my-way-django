import { Component, OnInit } from '@angular/core';
import { auth } from 'firebase/app';

import { AuthService } from './auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  email: String = '';
  providers = {
    google: new auth.GoogleAuthProvider
  }

  constructor(private authService: AuthService) { }

  async ngOnInit() {

  }

  authenticate (provider:auth.AuthProvider) {
    this.authService.socialLogin(provider)
  }


}
