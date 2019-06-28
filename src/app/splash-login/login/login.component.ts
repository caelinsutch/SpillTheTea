import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../_services/auth/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  form: FormGroup;
  error: string;

  constructor(
      private authService: AuthService,
      private router: Router
  ) { }

  ngOnInit() {
    this.form = new FormGroup({
      email: new FormControl('', Validators.compose([
        Validators.required
      ])),
      password: new FormControl('', Validators.compose([
        Validators.required,
      ])),
    });
  }

  validation_messages = {
    'username': [
      {type: 'required', message: 'Username is required.'},
    ],
    'password': [
      {type: 'required', message: 'Password is required.'},
    ],
  };

  submit(userData) {
    this.authService.login(userData.email, userData.password).then( res => {
      console.log(res);
      console.log(this.authService.isLoggedIn);
      this.authService.user.subscribe(user => {
        console.log(user);
      });
      this.router.navigate(['/tabs']).then();
    }).catch(e => {
      this.error = e.message;
      this.router.navigate(['/']).then()
    });
  }
}
