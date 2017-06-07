import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { MockDataProvider } from '../../providers/mock-data/mock-data';
/**
 * Generated class for the ProgressPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-progress',
  templateUrl: 'progress.html',
})
export class ProgressPage {

  private goalUrl = "";
  private user;
  constructor(public navCtrl: NavController, public navParams: NavParams, public data:MockDataProvider) {
    this.user = this.navParams.data;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProgressPage');
  }

  SaveGoal(){
    this.data.saveGoal(this.user.id, this.goalUrl);
  }
  GetRemainingSkillsCount(){
    var count = 0;
    this.user.goal.skills.map(skill => {
      if(!skill.obtained){
        count++;
      }
    });

    return count;
  }
}
