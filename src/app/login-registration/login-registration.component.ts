import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import { AuthService} from '../auth.service';
import { Router} from '@angular/router';
import { Observable } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';
import {User} from '../login-registration/user.model';


@Component({
  selector: 'app-login-registration',
  templateUrl: './login-registration.component.html',
  styleUrls: ['./login-registration.component.css']
})
export class LoginRegistrationComponent implements OnInit {
  email: string;
  pwd: string;
  name: string;
  description: string;
  users: Observable<User>;

  errorMessage: string;
  form;

  @Output()
  creatingUserEvent = new EventEmitter<boolean>();

  @Output()
  createUserEvent = new EventEmitter<User>();

  constructor(private fb: FormBuilder, private myRoute: Router,
    private auth:AuthService) {
      this.form = fb.group({
        email: ['', [Validators.required, Validators.email]],
        password: ['', Validators.required]
      });
     }

  ngOnInit() {
  }

  register() {
    this.auth.signup(this.email, this.pwd, this.name);
    console.log(this.email);
  }
  

  logIn() {
    this.auth.doLogin(this.form.value)
    .then(res => {
      this.myRoute.navigate(['home']);
    }, err => {
      console.log(err);
      this.errorMessage = err.message;
    })

    

    
  }

}
