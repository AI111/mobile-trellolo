import {Component, Inject, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../common/auth.service/auth.service';
import {Router} from '@angular/router';
import {APP_CONFIG} from '../common/IAppConfig';
const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public url: string;
  public loginForm = new FormGroup({
    email: new FormControl('', [
      Validators.required,
      Validators.pattern(EMAIL_REGEX)]),
    password: new FormControl('', [
      Validators.required,
      Validators.min(6)
    ]),
  });
  constructor(private authService: AuthService,
              private router: Router,
              @Inject(APP_CONFIG) protected config) {
    this.url = this.config.serverUrl;
  }

  ngOnInit() {
  }
  login(): void {
    this.authService.login(this.loginForm.value)
      .subscribe((user) => {
        this.router.navigate(['/']);
      });
  }
}
