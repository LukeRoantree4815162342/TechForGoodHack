import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { MainPage } from '../main/main';

import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, private afAuth: AngularFireAuth) {
    afAuth.authState.subscribe(user => {
      if (!user) {
        return;
      }
      this.navCtrl.push(MainPage, 1);
    });
  }

  signInWithGoogle() {
    this.afAuth.auth
      .signInWithPopup(new firebase.auth.GoogleAuthProvider())
      .then(res => {
        console.log(res);
        this.navCtrl.push(MainPage, 1);
      });
  }
  signOut() {
    this.afAuth.auth.signOut();
  }
  Login() {
    this.navCtrl.push(MainPage, 1);
  }

}
