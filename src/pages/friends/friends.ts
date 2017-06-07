import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

/**
 * Generated class for the FriendsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-friends',
  templateUrl: 'friends.html',
})

export class FriendsPage {

  private user;
  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
    this.user = this.navParams.data;

    console.log(this.user);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FriendsPage');
  }
  confirmSkillEndorsed(skillEndorsed:string) {
    let alert = this.alertCtrl.create({
      title: 'Success',
      subTitle: 'You endorsed them for their skill in ' + skillEndorsed,
      buttons: ['OK']
    });
    alert.present();
  }
  endorse() {
    let skillToBeEndorsed = '';
    let alert = this.alertCtrl.create({
      title: 'Endorse',
      inputs: [
        {
          name: 'Skill',
          placeholder: 'Skill'
        },
        {
          name: 'Reason / Evidence',
          placeholder: 'Reason / Evidence',
          type: 'text'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Endorse Skill',
          handler: data => {
            if (true) {
              //console.log(data);
              this.confirmSkillEndorsed(data.Skill);
              // logged in!
            } else {
              // invalid login
              //return false;
            }
          }
        }
      ]
    });
    alert.present();
  }

}
