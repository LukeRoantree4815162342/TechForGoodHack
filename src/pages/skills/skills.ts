import { Component } from '@angular/core';
import { NavController, NavParams, ActionSheetController } from 'ionic-angular';
import { QuestionPage } from "../question/question";

import { ExperiencesPage } from '../experiences/experiences';
/**
 * Generated class for the SkillsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
  selector: 'page-skills',
  templateUrl: 'skills.html',
})
export class SkillsPage {

  private user;
  constructor(public navCtrl: NavController, public navParams: NavParams, public actionSheetCtrl: ActionSheetController) {
    this.user = this.navParams.data;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SkillsPage');
  }

  AddSkill(){
   let actionSheet = this.actionSheetCtrl.create({
     title: 'Add a skill via:',
     buttons: [
       {
         text: 'Skills questionnaire',
         icon: 'list-box',
         handler: () => {
          this.navCtrl.push(QuestionPage, this.user.$key);
         }
       },
       {
         text: 'AI enhanced skills finder',
         icon : 'ionitron',
         handler: () => {
           console.log('AI option chosen');
         }
       },
       {
         text: 'Manual Input',
         icon: 'create',
         handler: () => {
           console.log('Archive clicked');
         }
       },
       {
         text: 'Cancel',
         role : 'cancel',
         icon: 'close',
         handler: () => {
           console.log('Cancel clicked');
         }
       }
     ]
   });
   actionSheet.present();
  }
  ShowExperiences(skill){
    this.navCtrl.push(ExperiencesPage, skill);
  }

  startQuestion(){
    this.navCtrl.push(QuestionPage, this.user.$key);
  }

  GetSkillLevel(level){
    if(level < 3){
      return "weak";
    }
    else if(level <5){
      return "medium";
    }
    else{
      return "strong";
    }
  }

}
