import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class SnackBarService {

  constructor(
    private _snackBar:MatSnackBar
  ) { }

  opensnackbar(msg:string){
    this._snackBar.open(msg,"close",{
    horizontalPosition:"right",
    verticalPosition:"top",
    duration:3000
    })
  }
}
