import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MainPage } from './main';
import { SkillsPage } from '../skills/skills';

@NgModule({
  declarations: [
    MainPage,
    SkillsPage,
  ],
  imports: [
    IonicPageModule.forChild(MainPage),
  ]
})
export class MainPageModule {}
