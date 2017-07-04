import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { DataProvider } from '../../providers/data/data';

/**
 * Generated class for the FriendsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
  selector: 'page-friends',
  templateUrl: 'friends.html',
})

export class FriendsPage {

  private user;
  private friends;
  constructor(private ds: DataProvider, private navCtrl: NavController, private navParams: NavParams, private alertCtrl: AlertController) {
    this.user = ds.currentUser;
    if (this.user.friends) {
      ds.getFriends(this.user.friends.map(friend => friend.friendId)).subscribe(friends => {
        this.friends = friends;
      }, err => console.log(err));
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FriendsPage');
  }
  confirmSkillEndorsed(skillEndorsed: string) {
    let alert = this.alertCtrl.create({
      title: 'Success',
      subTitle: 'You endorsed them for their skill in ' + skillEndorsed,
      buttons: ['OK']
    });
    alert.present();
  }
  endorse() {
    //let skillToBeEndorsed = '';
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
