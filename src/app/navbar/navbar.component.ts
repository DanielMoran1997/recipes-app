import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth.service';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { tap, map, take } from 'rxjs/operators';
import {AngularFirestoreCollection, AngularFirestore, AngularFirestoreDocument} from '@angular/fire/firestore'
import * as firebase from 'firebase';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isLoggedIn: boolean;
  isLoggedOut: boolean;

  constructor(private afs: AngularFirestore, private auth: AuthService, private myRoute: Router, private afAuth: AngularFireAuth) { 
  }

  ngOnInit() {
    this.isLoggedIn = this.auth.isLoggedIn();

  }

  onLogout() {
    this.auth.doLogout();
    this.isLoggedIn = this.auth.isLoggedIn();
    this.myRoute.navigate(["login"]);
  }

  userLoggedIn(): boolean {
    this.isLoggedIn = this.auth.isLoggedIn();
    return this.isLoggedIn
  }

  userLoggedOut(): boolean {
    this.isLoggedOut = this.auth.isLoggedOut();
    return this.isLoggedOut
  }

}
