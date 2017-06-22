import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { MainPage } from '../main/main';

import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { MockDataProvider } from '../../providers/mock-data/mock-data';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  private username: string;
  private password: string;
  constructor(public navCtrl: NavController, private afAuth: AngularFireAuth, private mock: MockDataProvider) {
    afAuth.authState.subscribe(user => {
      if (!user) {
        return;
      }
      this.showMainPage();
    });
  }
  showMainPage() {
    this.mock.getData('/').subscribe(res => {
      this.navCtrl.push(MainPage, 1);
    })
  }
  signInWithGoogle() {
    this.afAuth.auth
      .signInWithPopup(new firebase.auth.GoogleAuthProvider())
      .then(res => {
        this.showMainPage();
      });
  }
  signOut() {
    this.afAuth.auth.signOut();
  }
  Login() {
    console.log(this.password + this.username);
    this.afAuth.auth
      .signInWithEmailAndPassword(this.username, this.password)
      .then(res => {
        this.showMainPage();
      });
  }
}
