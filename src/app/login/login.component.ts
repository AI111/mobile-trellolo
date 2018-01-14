import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../common/auth.service/auth.service';
import {Router} from '@angular/router';
const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    email: new FormControl('', [
      Validators.required,
      Validators.pattern(EMAIL_REGEX)]),
    password: new FormControl('', [
      Validators.required,
      Validators.min(6)
    ]),
  });
  constructor(private authService: AuthService,
              private router: Router) { }

  ngOnInit() {
  }
  login(){
    // console.log(this.loginForm.value);
    this.authService.login(this.loginForm.value)
      .subscribe((user) => {
        console.log(user);
        // this.router.navigate(['/']);
      })
  }
}
