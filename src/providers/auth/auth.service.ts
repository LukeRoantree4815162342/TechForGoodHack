import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseObjectObservable } from "angularfire2/database";
import { AngularFireAuth } from "angularfire2/auth";
import "rxjs/add/operator/take";
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs/Observable';
import { DataProvider } from '../data/data';
import { Logger } from '../analytics/logger';
@Injectable()
export class AuthService {
  private userRef: firebase.User;
  private memberRef: FirebaseObjectObservable<any>;
  public authState: Observable<any>;
  public user: Object;
  constructor(private afAuth: AngularFireAuth, private db: AngularFireDatabase) {
    this.authState = afAuth.authState;
    afAuth.authState.subscribe(usr => {
      if(!usr){
        this.userRef = null;
        this.memberRef = null;
        return;
      }
      this.userRef = usr;
      this.memberRef = this.db.object(`users/${this.userRef.uid}`);
      this.memberRef.take(1)
        .subscribe(data => {
          const newMember: Object = {
            email: usr.email,
            name: usr.displayName,
            src: usr.photoURL
          }
          if (!data.$exists()) {
            this.user = newMember;
          } else {
            this.user = data;
          }
          this.memberRef.update(newMember).then(data => {
            // log any errors
            console.log(data);
          });
        })
      console.log(usr);
    })
  }
  loginGoogle() {
    return this.afAuth.auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider());
  }
  logout() {
    return this.afAuth.auth.signOut();
  }
  login(username: string, password: string) {
    return this.afAuth.auth
      .signInWithEmailAndPassword(username, password);
  }
}
