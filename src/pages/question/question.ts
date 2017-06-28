import { Component, Input, ViewChild } from '@angular/core';
import { NavController, NavParams, LoadingController } from 'ionic-angular';
import { Slides } from 'ionic-angular';
import { DataProvider } from "../../providers/data/data";

/**
 * Generated class for the QuestionPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
  selector: 'page-question',
  templateUrl: 'question.html',
})
export class QuestionPage {

  @Input() data: any;
  @Input() events: any;
  @ViewChild('wizardSlider') slider: Slides;

  private userId;
  constructor(private navCtrl: NavController, private navParams: NavParams, private dataP: DataProvider, public loadingCtrl: LoadingController) {
    this.userId = this.navParams.data;
    this.data = this.dataP.getQuestions();
  }
  ngOnInit() {

  }
  changeSlide(index: number): void {
    if (index > 0) {
      this.slider.slideNext(300);
    } else {
      this.slider.slidePrev(300);
    }
  }

  slideHasChanged(index: number): void {
    console.log(this.slider.getActiveIndex());
  }

  show(value: string): boolean {
    let result: boolean = false;
    try {
      if (value == 'prev') {
        result = !this.slider.isBeginning();
      } else if (value == 'next') {
        result = this.slider.getActiveIndex() < (this.slider.length() - 1);
      } else if (value == 'finish') {
        result = this.slider.isEnd();
      }
    } catch (e) { }
    return result;
  }

  onEvent(event: string) {
    if (this.events[event]) {
      this.events[event]();
    }
    console.log(event);
  }
  onFinish() {
    console.log('finished');
    let loading = this.loadingCtrl.create({
      content: 'Calculating results...',
      duration: 3000
    });

    loading.onDidDismiss(() => {
      this.dataP.saveQuestions(this.userId, this.data.items);
      this.navCtrl.pop();
    });

    loading.present();

  }

}
