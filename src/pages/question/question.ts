import { Component, Input, ViewChild } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { Slides } from 'ionic-angular';

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

  @Input() data: any = {
    'btnNext': 'Next',
    'btnFinish': 'Finish',
    'btnSkip': 'Skip',
    'items': [
      {
        backgroundImage: 'assets/images/avatar-large/5.jpg',
        title: 'Express Yourself',
        description: 'I find it easy to express myself in writing',
        button: 'Next',
        skip: 'Skip'
      },
      {
        backgroundImage: 'assets/images/avatar-large/6.jpg',
        title: 'Data',
        description: 'I am good at collecting, collating, classifying and summarising data',
        button: 'Next',
        skip: 'Skip'
      },
      {
        backgroundImage: 'assets/images/avatar-large/7.jpg',
        title: 'Motivation',
        description: 'I am able to motivate and direct others',
        button: 'Next',
        skip: 'Skip'
      },
      {
        backgroundImage: 'assets/images/avatar-large/7.jpg',
        title: 'Tasks',
        description: 'I have a methodical approach to tasks',
        button: 'Next',
        skip: 'Skip'
      },
      {
        backgroundImage: 'assets/images/avatar-large/7.jpg',
        title: 'Complexity',
        description: 'I am able to assess and summarise complex, detailed information',
        button: 'Next',
        skip: 'Skip'
      },
      {
        backgroundImage: 'assets/images/avatar-large/7.jpg',
        title: 'Speaking',
        description: 'I find it easy to express my views when speaking',
        button: 'Next',
        skip: 'Skip'
      },
      {
        backgroundImage: 'assets/images/avatar-large/7.jpg',
        title: 'Discuss',
        description: 'I am able to discuss issues and reach agreement when disagreeing',
        button: 'Next',
        skip: 'Skip'
      },
      {
        backgroundImage: 'assets/images/avatar-large/7.jpg',
        title: 'Leadership',
        description: 'People tend to look to me for leadership.',
        button: 'Next',
        skip: 'Skip'
      },
      {
        backgroundImage: 'assets/images/avatar-large/7.jpg',
        title: 'Numbers',
        description: 'I do not have problems understanding numerical data. ',
        button: 'Next',
        skip: 'Skip'
      },
      {
        backgroundImage: 'assets/images/avatar-large/7.jpg',
        title: 'Articulate?',
        description: 'People think of me as articulate',
        button: 'Finish',
        skip: 'Skip'
      }
    ]
  };
  @Input() events: any;
  @ViewChild('wizardSlider') slider: Slides;

  constructor(private navCtrl: NavController) { }
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
  onFinish(){
    console.log('finished');
    this.navCtrl.pop();
  }

}
