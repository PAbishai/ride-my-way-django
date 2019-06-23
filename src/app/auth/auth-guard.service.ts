import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router'
import { AuthService } from './auth.service';
import { MatSnackbarService } from '../common/utils/mat-snackbar.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(public auth:AuthService, public router:Router, public _snackBar:MatSnackbarService) { 
  }
  canActivate(): boolean {
    if(!this.auth.isAuthenticated()){
      this._snackBar.openSnackBar('Please login to continue', 'close');
      this.router.navigate(['']);
      return false;
    } else{
      if(localStorage.getItem('firstLogin')){
        this._snackBar.openSnackBar('success', 'close');
        localStorage.removeItem('firstLogin')
      }
      return true;
    }
  }
}
