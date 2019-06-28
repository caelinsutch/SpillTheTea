import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../_services/auth/auth.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {

  form: FormGroup;
  error: string;

  constructor(
      private authService: AuthService,
      private router: Router
  ) { }

  ngOnInit() {
    this.form = new FormGroup({
      username: new FormControl('', Validators.compose([
        Validators.maxLength(25),
        Validators.minLength(5),
        Validators.pattern('^[a-zA-Z]+$'),
        Validators.required
      ])),
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      email: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ])),
      password: new FormControl('', Validators.compose([
        Validators.minLength(5),
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9!@#\\$%\\^\\&*\\)\\(+=._-]+$')
      ])),
      terms: new FormControl(true, Validators.pattern('true'))
    });
  }

  validation_messages = {
    'username': [
      {type: 'required', message: 'Username is required.'},
      {type: 'minlength', message: 'Must be at least 5 characters long'},
      {type: 'maxlength', message: 'Cannot be more than 25 characters long.'},
      {type: 'pattern', message: 'Only Letters'},
      {type: 'validUsername', message: 'Your username has already been taken.'}
    ],
    'name': [
      {type: 'required', message: 'Name is required.'}
    ],
    'lastname': [
      {type: 'required', message: 'Last name is required.'}
    ],
    'email': [
      {type: 'required', message: 'Email is required.'},
      {type: 'pattern', message: 'Please enter a valid email.'}
    ],
    'password': [
      {type: 'required', message: 'Password is required.'},
      {type: 'minlength', message: 'Password must be at least 5 characters long.'},
      {type: 'pattern', message: 'Must contain at least one uppercase, one lowercase, and one number.'}
    ],
    'terms': [
      {type: 'pattern', message: 'You must accept terms and conditions.'}
    ],
  };

  submit(userData) {
    this.authService.register(userData.email, userData.password).then( res => {
      this.authService.login(userData.email, userData.password).then(loginRes => {
        this.authService.updateUser(res.user, userData).then(updateRes => {
          this.router.navigate(['/tabs'], { queryParams: {newUser: true}}).then();
        });
      })
    }).catch(e => {
      this.error = e.message
    });
  }
}
