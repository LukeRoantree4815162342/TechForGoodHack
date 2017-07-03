import { Component } from '@angular/core';
import {  NavController, NavParams, AlertController, ToastController } from 'ionic-angular';

import { DataProvider } from '../../providers/data/data';

/**
 * Generated class for the ActivityPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
  selector: 'page-activity',
  templateUrl: 'activity.html',
})
export class ActivityPage {

  private activities;
  private userId;
  constructor(public navCtrl: NavController, public navParams: NavParams, public data: DataProvider, public alertCtrl: AlertController, public toastCtrl: ToastController) {
    this.activities = this.data.getActivities(this.navParams.data.skillId);
    this.userId = this.navParams.data.userId;
    console.log(this.activities);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ActivityPage');
  }

  ReadMore(activity) {
    let alert = this.alertCtrl.create({
      title: activity.name,
      subTitle: activity.description,
      buttons: ['OK']
    });
    alert.present();
  }

  Share() {
    let alert = this.alertCtrl.create();
    alert.setTitle('Who do you want to share to?');

    alert.addInput({
      type: 'checkbox',
      label: 'David Blaine',
      value: 'value1',
      checked: true
    });

    alert.addInput({
      type: 'checkbox',
      label: 'Thomas Wayne',
      value: 'value2'
    });

    alert.addButton('Cancel');
    alert.addButton({
      text: 'Share!',
      handler: data => {
        this.SuccessfullySent();
      }
    });
    alert.present();
  }

  AddActivity(activityId){
      let toast = this.toastCtrl.create({
    message: 'This activity has now been added to your skills list!',
    duration: 3000,
    position: 'top'
  });

  toast.onDidDismiss(() => {
  });
    this.data.AddActivity(activityId, this.userId);

    toast.present();
    this.navCtrl.pop();

  }

  SuccessfullySent(){
        let alert = this.alertCtrl.create({
      title: 'Success',
      subTitle: 'You have sent your friends a request to join this organisation!',
      buttons: ['OK']
    });
    alert.present();

  }
}
  

