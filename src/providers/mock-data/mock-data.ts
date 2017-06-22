import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';

import { AngularFireDatabase, FirebaseObjectObservable } from 'angularfire2/database';
import { Observable } from "rxjs/Observable";

/*
  Generated class for the MockDataProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class MockDataProvider {

  private data;
  constructor(private db: AngularFireDatabase) {
    // this.getData('/');
  }

  getData(path: string): Observable<any> {
    return this.db.object(path);
  }

  getUser(userId): Observable<any> {
    return this.getData(`/users/${userId}`).map(user => {

      // var user = this.data.users.filter(user => user.id == userId)[0];
      if (user.currentskills) {
        user.currentskills.map(skill => {
          skill.object = this.getSkill(skill.skillId);
          return skill;
        });
      }
      if (user.friends) {
        user.friends.map(friend => {
          friend.object = this.getFriend(friend.friendId);
          return friend;
        });
      }
      if (user.goal != null) {
        user.goal.skills.map(skill => {
          skill.object = this.getSkill(skill.skillId);
          skill.obtained = user.currentskills.filter(currentskill => currentskill.skillId == skill.skillId).length != 0;
          return skill;
        });
      }
      return user;
    });
  }

  //the reason I am not using getUser instead is that if i use getUser when finding a friend, i will end up in an infinite loop
  getFriend(userId) {
    return this.data.users.filter(user => user.id == userId)[0];
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
  saveQuestions(userId, answeredQuestions) {


    answeredQuestions.filter(q => q.yes).map(q => {
      this.addSkill(userId, q.skill, q.experience);
    });
    this.getUser(userId);//dont remove line, breaks the method (for some crazy reason...)
  }

  addSkill(userId, skillId, story) {
    var user = this.getUser(userId);

    if (user.currentskills.filter(skill => skill.skillId == skillId).length == 0) {
      console.log("if was true");
      user.currentskills = user.currentskills.concat({ skillId: skillId, experiences: [{ story: story }] });
    }
    else {
      console.log("if was false");

      user.currentskills = user.currentskills.map(skill => {
        if (skill.skillId == skillId) {
          skill.experiences = skill.experiences.concat({ story: story });
        }
        return skill;
      })
    }

    this.updateUser(userId, user);
  }

  updateUser(userId, newUser) {
    this.data.users = this.data.users.map(user => {
      if (user.id == userId) {
        user = newUser;
      }
      return user;
    });
  }

  saveGoal(userId, newGoal) {
    this.getUser(userId).goal = this.data.goals.filter(goal => goal.title == newGoal)[0];

    console.log(this.getUser(userId));
    var user = this.data.users.filter(user => user.id == userId)[0];

    user.goal.skills.map(skill => {
      skill.object = this.getSkill(skill.skillId);
      skill.obtained = this.getUser(userId).currentskills.filter(currentskill => currentskill.skillId == skill.skillId).length != 0;
      return skill;
    });
  }

  getActivities(skillId) {
    var activities = this.data.activities.filter(activity => {
      var count = 0;
      activity.skillsGained.map(skill => {
        if (skill.id == skillId) {
          count++;
        }
      });
      return count > 0;
    });

    console.log('at this point');
    console.log(activities);
    activities = activities.map(activity => {
      activity.skillsGained = activity.skillsGained.map(skill => {
        skill.object = this.getSkill(skill.id);
        return skill;
      });
      return activity;
    })


    return activities;

  }

  AddActivity(activityId, userId) {
    var user = this.data.users.filter(user => user.id == userId)[0];

    var activity = this.data.activities.filter(activity => activity.id == activityId)[0];

    user.activities = user.activities.concat({ activityId: activity.id });

    activity.skillsGained.map(skill => {
      this.addSkill(userId, skill.id, skill.experience);
    })

    this.getUser(userId);
  }


}
