import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MainPage } from '../main/main';
import { DataProvider } from '../../providers/data/data';
import { AuthService } from '../../providers/auth/auth.service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  private username: string;
  private password: string;
  private loadingMain : boolean;
  constructor(public navCtrl: NavController, private afAuth: AuthService, private dataProvider: DataProvider) {
    afAuth.authState.subscribe(user => {
      if (!user) {
        return;
      }
      this.showMainPage(user.uid);
    });
  }
  showMainPage(userId: any) {
    if(this.loadingMain){
      return;
    }
    this.loadingMain = true;
    this.dataProvider.setCurrentUserId(userId);
    this.dataProvider.getSharedData().subscribe(res => {
      this.navCtrl.push(MainPage, userId);
    })
  }
  signInWithGoogle() {
    this.afAuth.loginGoogle();
  }
  Login() {
    this.afAuth
      .login(this.username, this.password);
  }
}
