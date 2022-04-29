import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { LoginValidators } from './login.validators';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.scss']
})
export class SignupFormComponent implements OnInit {

  form = new FormGroup({
    // validator qo'shish
    login: new FormControl('', [
    Validators.required,
    Validators.minLength(3),
    LoginValidators.noSpace
  ], LoginValidators.isTaken),
    password: new FormControl()
  })

  get login() {
    return this.form.get('login');
  }

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  signIn() {
    let isValid = this.authService.signIn(this.form.value);

    if (!isValid) {
      this.form.setErrors({
        invalidLogin: true
      })
    }
  }

}
