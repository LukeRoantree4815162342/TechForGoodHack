import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { ExperiencesPage } from '../experiences/experiences';
import { MockDataProvider } from '../../providers/mock-data/mock-data'; 
/**
 * Generated class for the SkillsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-skills',
  templateUrl: 'skills.html',
})
export class SkillsPage {

  private user;
  constructor(public navCtrl: NavController, public navParams: NavParams, public data: MockDataProvider) {
    this.user = this.navParams.data;
    console.log(this.user);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SkillsPage');
  }

  AddSkill(skillId, experience){
    // this.data.addSkill(this.user.id, skillId, experience);
  }
  ShowExperiences(skill){
    this.navCtrl.push(ExperiencesPage, skill);
  }
}
