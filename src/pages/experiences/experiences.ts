import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ExperiencesPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
  selector: 'page-experiences',
  templateUrl: 'experiences.html',
})
export class ExperiencesPage {

  private skill;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.skill = this.navParams.data;
    console.log(this.skill);  
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ExperiencesPage');
  }

}
