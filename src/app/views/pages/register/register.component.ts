import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  regForm = new FormGroup({
    username: new FormControl(''),
    email: new FormControl(''),
    newpassword: new FormControl(''),
    newpassword2: new FormControl(''),
  });

  constructor() { }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.regForm.value);
  }

}
