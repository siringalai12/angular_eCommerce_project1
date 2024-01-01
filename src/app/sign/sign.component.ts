import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign',
  templateUrl: './sign.component.html',
  styleUrl: './sign.component.scss'
})
export class SignComponent {
  paasswordControl: FormControl = new FormControl('',[Validators.required]);
  paassword1Control: FormControl = new FormControl('',[Validators.required]);
  paassword2Control: FormControl = new FormControl('',[Validators.required]);
  paassword3Control: FormControl = new FormControl('',[Validators.required]);
}
