import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PersonalityProvider } from '../../providers/personality/personality';
import { DataProvider } from '../../providers/data/data';
declare var Traitify;
/**
 * Generated class for the PersonalityPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
  selector: 'page-personality',
  templateUrl: 'personality.html',
})
export class PersonalityPage {
  private assessment: any;
  private traitify: any;
  private userId: any;
  constructor(private personality: PersonalityProvider, private ds: DataProvider, public navCtrl: NavController, public navParams: NavParams) {

  }
  showAssessment(id: string) {
    // inject js
    Traitify.setPublicKey("44840894d82172785e20f8814a"); // Example Public Key
    Traitify.setHost("api.traitify.com"); // Example host url (Defaults to api.traitify.com)
    Traitify.setVersion("v1"); // Example Version
    this.traitify = Traitify.ui.load(id, ".slide-deck", {
      results: { target: ".results" },
      personalityTypes: { target: ".personality-types" },
      personalityTraits: { target: ".personality-traits" }
    }); // Example selector for widget target
    this.traitify.slideDeck.onFinished(details => {
      console.log(details);
      console.log(this.traitify);
      // get the results
      this.personality.getPersonalityResults(id).subscribe(res => {
        this.ds.addAssessment(this.userId, res);
      });
      //alert("Finished");
      //this.ds.addAssessment(this.user.personality, ass);
    })
  }
  retake() {
    this.personality.generateAssessment().subscribe(ass => {
      this.assessment = ass;
      this.showAssessment(ass.id);
    });
  }
  ngAfterViewInit() {
    this.userId = this.navParams.data;
    if (this.ds.currentUser.personality && this.ds.currentUser.personality.id) {
      this.assessment = this.ds.currentUser.personality;
      this.showAssessment(this.ds.currentUser.personality.id);
    }
    else {
      this.retake();
    }
  }
}
