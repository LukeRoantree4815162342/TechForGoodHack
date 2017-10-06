import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DataProvider } from "../../providers/data/data";

/**
 * Generated class for the QualificationsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
  selector: 'page-qualifications',
  templateUrl: 'qualifications.html',
})
export class QualificationsPage {
  user: any;

  constructor(private data: DataProvider, public navCtrl: NavController, public navParams: NavParams) {
    this.user = this.data.currentUser
    if (!this.user.qualifications) {
      this.user.qualifications = {};
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad QualificationsPage');
  }
  save() {
    this.data.saveQualifications(this.user.$key, this.user.qualifications);
  }
}
