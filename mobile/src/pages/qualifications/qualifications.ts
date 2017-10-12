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


  constructor(private data: DataProvider, public navCtrl: NavController, public navParams: NavParams) {
    this.data.currentUser
    if (!this.data.currentUser.qualifications) {
      this.data.currentUser.qualifications = {};
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad QualificationsPage');
  }
  save() {
    console.log('saving qualification...');
    this.data.saveQualifications(this.data.currentUser.$key, this.data.currentUser.qualifications);
  }
}
