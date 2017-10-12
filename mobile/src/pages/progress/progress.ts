import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController } from 'ionic-angular';

import { ActivityPage } from '../activity/activity';
import { DataProvider } from '../../providers/data/data';
import { PersonalityPage } from "../personality/personality";
import { CareerPage } from "../career/career";
import { QualificationsPage } from "../qualifications/qualifications";
import { SkillsPage } from '../skills/skills';
/**
 * Generated class for the ProgressPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
  selector: 'page-progress',
  templateUrl: 'progress.html',
})
export class ProgressPage {

  private goalUrl = "";
  private user;
  constructor(public navCtrl: NavController, public navParams: NavParams, public data: DataProvider, public loadingCtrl: LoadingController) {
    this.user = this.data.currentUser;
  }

  startQuestion() {
    this.navCtrl.push(PersonalityPage, this.user.$key);
  }
  openQualifications() {
    this.navCtrl.push(QualificationsPage, this.user.$key);
  }

  showCareers() {
    this.navCtrl.push(CareerPage, this.user.$key);
  }
  showSkills() {
    this.navCtrl.push(SkillsPage, this.user.$key);
  }
  ionViewDidEnter() {
    console.log('entering progress page..');
    //set the user again to refresh
    this.user = this.data.currentUser;
}
  ionViewDidLoad() {
    console.log('ionViewDidLoad ProgressPage');
  }

  SaveGoal() {
    //Add loader

    let loading = this.loadingCtrl.create({
      content: 'Finding skills required...',
      duration: 3000
    });

    loading.onDidDismiss(() => {
      this.data.saveGoal(this.user.$key, this.goalUrl);
    });

    loading.present();
  }
  GetRemainingSkillsCount() {
    var count = 0;
    this.user.goal.skills.map(skill => {
      if (!skill.obtained) {
        count++;
      }
    });

    return count;
  }

  GetActivities(skillId) {
    this.navCtrl.push(ActivityPage, { skillId: skillId, userId: this.user.$key });
  }
}
