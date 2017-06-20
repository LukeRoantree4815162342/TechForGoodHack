import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { MainPage } from '../pages/main/main';
import { SkillsPage } from '../pages/skills/skills';
import { ProgressPage } from '../pages/progress/progress';
import { FriendsPage } from '../pages/friends/friends';
import { ProfilePage } from '../pages/profile/profile';
import { ExperiencesPage } from '../pages/experiences/experiences';
import { MockDataProvider } from '../providers/mock-data/mock-data';
import { QuestionPage } from "../pages/question/question";
import { ActivityPage } from '../pages/activity/activity';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

export const firebaseConfig = {
  apiKey: "AIzaSyDX6My3ivHiHDudgOVsQ6AOkIRhLPdr53Q",
  authDomain: "mypotential-7afbb.firebaseapp.com",
  databaseURL: "https://mypotential-7afbb.firebaseio.com",
  projectId: "mypotential-7afbb",
  storageBucket: "mypotential-7afbb.appspot.com",
  messagingSenderId: "552620084220"
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    MainPage,
    SkillsPage,
    ProgressPage,
    QuestionPage,
    FriendsPage,
    ProfilePage,
    ExperiencesPage,
    ActivityPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    MainPage,
    SkillsPage,
    ProgressPage,
    QuestionPage,
    FriendsPage,
    ProfilePage,
    ExperiencesPage,
    ActivityPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    MockDataProvider
  ]
})
export class AppModule { }
