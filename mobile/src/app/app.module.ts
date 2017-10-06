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
import { DataProvider } from '../providers/data/data';
import { QuestionPage } from "../pages/question/question";
import { ActivityPage } from '../pages/activity/activity';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { FirebaseAnalytics } from '@ionic-native/firebase-analytics';
import * as config from '../secrets';
import { AuthService } from '../providers/auth/auth.service';
import { Logger } from '../providers/analytics/logger';
import { PersonalityProvider } from '../providers/personality/personality';
import { PersonalityPage } from '../pages/personality/personality';
import { Http, HttpModule } from '@angular/http';
import { CareerPage } from "../pages/career/career";
import { QualificationsPage } from "../pages/qualifications/qualifications";

const firebaseConfig = config.default.firebaseConfig;

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    MainPage,
    SkillsPage,
    ProgressPage,
    CareerPage,
    QualificationsPage,
    QuestionPage,
    PersonalityPage,
    FriendsPage,
    ProfilePage,
    ExperiencesPage,
    ActivityPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
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
    QualificationsPage,
    SkillsPage,
    ProgressPage,
    QuestionPage,
    PersonalityPage,
    CareerPage,
    FriendsPage,
    ProfilePage,
    ExperiencesPage,
    ActivityPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    FirebaseAnalytics,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    DataProvider, AuthService, Logger,
    PersonalityProvider
  ]
})
export class AppModule { }
