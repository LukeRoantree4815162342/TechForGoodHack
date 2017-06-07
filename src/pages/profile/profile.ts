import { Component } from '@angular/core';
import { NavController, NavParams , AlertController} from 'ionic-angular';
import 'rxjs/add/operator/map';

import { HomePage } from '../home/home';
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
  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
    this.user = this.navParams.data;
    console.log(this.user);
    this.numberOfExperiences = this.GetNumberOfExperiences();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
  }

  GetNumberOfExperiences(){
    var count = 0;
    this.user.currentSkills.map(skill => {
      count += skill.experiences.length;
    });
    return count;
  }

  LogOut(){
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
          this.navCtrl.parent.parent.pop()
        }
      }
    ]
  });
  alert.present();

  }


}
