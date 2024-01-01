import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent  {
  passwordControl: FormControl = new FormControl('',[Validators.required]);
  password1Control: FormControl = new FormControl('',[Validators.required]);
 
}
