import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import 'rxjs/add/operator/map';

/**
 * Generated class for the ProfilePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {

  private numberOfExperiences;
  private user; 
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.user = this.navParams.data;
    console.log(this.user);
    this.numberOfExperiences = this.GetNumberOfExperiences();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
  }

  GetNumberOfExperiences(){
    var count = 0;
    this.user.currentSkills.map(skill => {
      count += skill.experiences.length;
    });
    return count;
  }


}
