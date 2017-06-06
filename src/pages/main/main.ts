import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

import { SkillsPage } from '../skills/skills';
import { ProgressPage } from '../progress/progress';
import { FriendsPage } from '../friends/friends';
import { ProfilePage } from '../profile/profile';
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
@IonicPage()
export class MainPage {

  skillsRoot = SkillsPage;
  progressRoot = ProgressPage;
  friendsRoot = FriendsPage;
  profileRoot = ProfilePage;


  constructor(public navCtrl: NavController) {}

}
