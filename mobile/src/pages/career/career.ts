import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DataProvider } from "../../providers/data/data";
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
  private traitify: any;
  constructor(private data: DataProvider,private navCtrl: NavController, private navParams: NavParams) {
    this.user = this.data.currentUser
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CareerPage');
  }
  ngAfterViewInit() {
    this.showCareer(this.user.personality.id);
  }
  showCareer(id: string) {
    // inject js
    Traitify.setPublicKey("44840894d82172785e20f8814a"); // Example Public Key
    Traitify.setHost("api.traitify.com"); // Example host url (Defaults to api.traitify.com)
    Traitify.setVersion("v1"); // Example Version
    this.traitify = Traitify.ui.load("careers", id, ".careers", {
      careers: {
        experience_levels: "1,2,3", // Comma deliminated list
        number_of_matches: 10, // max 100
        columns: 2
      }
    }); // Example selector for widget target
  }

}
