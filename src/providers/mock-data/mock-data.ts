import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';

import { DATA } from './mock-data-store';
/*
  Generated class for the MockDataProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class MockDataProvider {

  private data;
  constructor() {
    this.data = DATA;
  }

  getUser(userId) {
    var user = this.data.users.filter(user => user.id == userId)[0];
    user.currentSkills.map(skill => {
      skill.object = this.getSkill(skill.skillId);
      return skill
    });
    return user;
  }

  getSkill(skillId) {
    return this.data.skills.filter(skill => skill.id == skillId)[0];
  }

  getActivity(activityId) {
    return this.data.activities.filter(activity => activity.id == activityId)[0];
  }

  getQuestions() {
    return this.data.questions;
  }
  saveQuestions(answeredQuestions) {
    this.data.users[0].currentSkills = answeredQuestions.filter(q => q.yes).map(q => {
      return { skillId: q.skill, experiences: [{ story: q.experience }] };
    });
    this.data.users[0].currentSkills.map(skill => {
      skill.object = this.getSkill(skill.skillId);
      return skill
    });
  }

}
