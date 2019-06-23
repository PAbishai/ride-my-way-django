import { Injectable } from '@angular/core';

import { User } from 'firebase'
import { auth } from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';
import { MatSnackbarService } from '../common/utils/mat-snackbar.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user: User

  constructor(private fireauth: AngularFireAuth, private snackBar:MatSnackbarService, private router:Router) {
    let currentUser = localStorage.getItem('user')
    if(!currentUser){
      localStorage.setItem('firstLogin', 'true');
    }
    this.fireauth.authState.subscribe(user => {
      if(user){
        this.user = user;
        localStorage.setItem('user', JSON.stringify(this.user));
        this.router.navigate(['organizations']);
      } else{
        localStorage.setItem('user', null);
      }
    });
   }

   async socialLogin(provider: auth.AuthProvider){
     try{
       await this.fireauth.auth.signInWithRedirect(provider);
     } catch(error){
       console.log('authentication error');
     }
  }

  async logout(){
    try {
      await this.fireauth.auth.signOut();
      localStorage.clear();
      this.router.navigate(['']);
    } catch (e){
      console.log(e);
    }
  }

  public isAuthenticated() : boolean {
    if(localStorage.getItem('user')){
      return true;
    } else{
      return false;
    }
  }
}
