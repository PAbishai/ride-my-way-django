import { Injectable } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class MatSnackbarService {

  constructor(private _snackBar: MatSnackBar) { }
  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      panelClass: ['success-snackbar'],
      duration: 1000,
      verticalPosition: 'top'
    });
  }
}
