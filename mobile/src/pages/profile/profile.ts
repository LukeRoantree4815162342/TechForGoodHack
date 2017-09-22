import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import 'rxjs/add/operator/map';
import { AuthService } from '../../providers/auth/auth.service';
import { HomePage } from '../home/home';
import { DataProvider } from '../../providers/data/data';

/**
 * Generated class for the ProfilePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {

  private numberOfExperiences;
  private user;
  constructor(private data: DataProvider, private auth: AuthService, private navCtrl: NavController, private navParams: NavParams, private alertCtrl: AlertController) {
    this.user = data.currentUser;
    console.log(this.user);
    this.numberOfExperiences = this.GetNumberOfExperiences();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
  }

  GetNumberOfExperiences() {
    var count = 0;
    this.user.currentskills.map(skill => {
      count += skill.experiences.length;
    });
    return count;
  }

  LogOut() {
    let alert = this.alertCtrl.create({
      title: 'Confirm',
      message: 'Are you sure you want to log out?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Log out',
          handler: () => {
            this.auth.logout();
            this.navCtrl.setRoot(HomePage);
            this.navCtrl.popToRoot();


          }
        }
      ]
    });
    alert.present();

  }


}
