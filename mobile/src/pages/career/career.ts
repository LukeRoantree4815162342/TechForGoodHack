import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { DataProvider } from "../../providers/data/data";
import { PersonalityProvider } from "../../providers/personality/personality";
declare var Traitify;
/**
 * Generated class for the CareerPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
  selector: 'page-career',
  templateUrl: 'career.html',
})
export class CareerPage {
  user: any;
  careers: any;
  private traitify: any;
  constructor(private toastCtrl: ToastController, private personality: PersonalityProvider, private data: DataProvider, private navCtrl: NavController, private navParams: NavParams) {
    this.user = this.data.currentUser;

    let ranges = "1,2,3,4,5";
    if (this.user.qualifications) {
      ranges = this.user.qualifications.ranges;
    }
    this.personality.careerOptions(this.user.personality.id, ranges, 30).subscribe(res => {
      console.log(res);
      this.careers = res;
    })
  }
  choose(career) {
    this.data.saveCareer(this.user.$key, career);
    this.toastCtrl.create({
      message: `Career Pathway Changed To ${career.career.title}`,
      duration: 3000,
      position: 'top'
    }).present();

  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad CareerPage');
  }
  ngAfterViewInit() {
    // let ranges = "1,2,3,4,5";
    // if (this.user.qualifications) {
    //   ranges = this.user.qualifications.ranges;
    // }
    // this.showCareer(this.user.personality.id, ranges);
  }
  showCareer(id: string, ranges: string) {
    // inject js
    // Traitify.setPublicKey("44840894d82172785e20f8814a"); // Example Public Key
    // Traitify.setHost("api.traitify.com"); // Example host url (Defaults to api.traitify.com)
    // Traitify.setVersion("v1"); // Example Version
    // this.traitify = Traitify.ui.load("careers", id, ".careers", {
    //   careers: {
    //     experience_levels: ranges, // Comma deliminated list
    //     number_of_matches: 10, // max 100
    //     columns: 2
    //   }
    // }); // Example selector for widget target
  }

}
