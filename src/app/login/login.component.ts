import {Component, Inject, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../common/auth.service/auth.service';
import {Router} from '@angular/router';
import {APP_CONFIG} from '../common/IAppConfig';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material';
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
              private iconRegistry: MatIconRegistry,
              private sanitizer: DomSanitizer,
              @Inject(APP_CONFIG) protected config) {
    this.url = this.config.serverUrl;
    iconRegistry.addSvgIcon( 'facebook', sanitizer.bypassSecurityTrustResourceUrl('assets/img/facebook.svg'));
    iconRegistry.addSvgIcon( 'github', sanitizer.bypassSecurityTrustResourceUrl('assets/img/github-circle.svg'));
    iconRegistry.addSvgIcon( 'google', sanitizer.bypassSecurityTrustResourceUrl('assets/img/google.svg'));
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
