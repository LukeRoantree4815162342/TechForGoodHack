import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { MainPage } from '../main/main';

import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { DataProvider } from '../../providers/mock-data/mock-data';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  private username: string;
  private password: string;
  constructor(public navCtrl: NavController, private afAuth: AngularFireAuth, private mock: DataProvider) {
    afAuth.authState.subscribe(user => {
      if (!user) {
        return;
      }
      this.showMainPage(0);
    });
  }
  showMainPage(userId : number) {
    this.mock.getData('/').subscribe(res => {
      this.navCtrl.push(MainPage, userId);
    })
  }
  signInWithGoogle() {
    this.afAuth.auth
      .signInWithPopup(new firebase.auth.GoogleAuthProvider())
      .then(res => {
        this.showMainPage(0);
      });
  }
  signOut() {
    this.afAuth.auth.signOut();
  }
  Login() {
    this.afAuth.auth
      .signInWithEmailAndPassword(this.username, this.password)
      .then(res => {
        this.showMainPage(0);
      });
  }
}
