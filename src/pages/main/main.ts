import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { SkillsPage } from '../skills/skills';
import { ProgressPage } from '../progress/progress';
import { FriendsPage } from '../friends/friends';
import { ProfilePage } from '../profile/profile';

import { MockDataProvider } from '../../providers/mock-data/mock-data';
/**
 * Generated class for the MainPage tabs.
 *
 * See https://angular.io/docs/ts/latest/guide/dependency-injection.html for
 * more info on providers and Angular DI.
 */
@Component({
  selector: 'page-main',
  templateUrl: 'main.html'
})
export class MainPage {

  private user;

  skillsRoot = SkillsPage;
  progressRoot = ProgressPage;
  friendsRoot = FriendsPage;
  profileRoot = ProfilePage;


  constructor(public navCtrl: NavController, public navParams: NavParams, public data : MockDataProvider ) {
    this.user = this.data.getUser(this.navParams.data);
  }

}
