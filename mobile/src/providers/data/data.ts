import { Injectable } from '@angular/core';
import 'rxjs/add/observable/forkJoin';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';

import { AngularFireDatabase, FirebaseObjectObservable } from 'angularfire2/database';
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/take";
import { AuthService } from '../auth/auth.service';
/*
  Generated class for the DataProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class DataProvider {

  public skills;

  saveQualifications(userId, qualifications): any {
    // work out the ranges
    const allRanges = [1, 2, 3, 4, 5];
    // assumes user wants to know about careers and jobs at their current attainment and above
    // in future we could make this configurable
    qualifications.ranges = allRanges.filter(num => num >= qualifications.attainment).join();
    this.getUser(userId).take(1).subscribe(user => {
      this.db.object(`/users/${userId}`).$ref.child('qualifications').update(qualifications);
    });
  }

  public activities;
  public goals;
  public questions;
  public currentUser;
  private userRef;

  constructor(private db: AngularFireDatabase, private auth: AuthService) {
    this.auth.authState.subscribe(state => {
      // if unauth then destroy watchers
      console.log(state);
      if (!state && this.userRef) {
        this.userRef.unsubscribe();
      }
    });

  }
  getSharedData() {
    // use take(1) to only get once and do not watch
    return Observable.forkJoin(
      this.getData('/skills').map(data => {
        this.skills = data;
      }).take(1),
      this.getData('/activities').map(data => {
        this.activities = data;
      }).take(1),
      this.getData('/goals').map(data => {
        this.goals = data;
      }).take(1),
      this.getData('/questions').map(data => {
        this.questions = data;
      }).take(1));
  }
  getData(path: string): FirebaseObjectObservable<any> {
    return this.db.object(path);
  }
  getFriends(users: number[]) {
    console.log(users);
    return Observable.forkJoin(
      users.map(id => this.db.object(`/users/${id}`).take(1)));
  }
  public setCurrentUserId(uid: string) {
    this.userRef = this.getUser(uid).subscribe();
  }
  private getUser(userId): Observable<any> {
    return this.getData(`/users/${userId}`).map(user => {
      this.currentUser = user;
      if (user.currentskills) {
        user.currentskills.map(skill => {
          skill.object = this.getSkill(skill.skillId);
          return skill;
        });
      }
      else {
        user.currentskills = [];
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
    return this.getData(`/users/${userId}`);
  }

  getSkill(skillId) {
    return this.skills.filter(skill => skill.id == skillId)[0];
  }

  getActivity(activityId) {
    return this.activities.filter(activity => activity.id == activityId)[0];
  }

  getQuestions() {
    return this.questions;
  }
  saveQuestions(userId, answeredQuestions) {
    this.getUser(userId).take(1).subscribe(user => {
      answeredQuestions.filter(q => q.yes).map(q => {
        this.addSkill(user, q.skill, q.experience);
      });
      this.db.object(`/users/${userId}`).$ref.child('currentskills').update(user.currentskills);
    });
  }

  addSkill(user, skillId, story) {
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
  }
  addAssessment(userId, assessment) {
    this.getUser(userId).take(1).subscribe(user => {
      this.db.object(`/users/${userId}`).$ref.child('personality').update(assessment);
    });
  }
  updateUser(userId, newUser) {
    this.db.object(`/users/${userId}`).update(newUser);
  }

  saveGoal(userId, newGoal) {
    this.getUser(userId).take(1).subscribe(user => {
      user.goal = this.goals.filter(goal => goal.title == newGoal)[0];
      user.goal.skills.map(skill => {
        skill.object = this.getSkill(skill.skillId);
        skill.obtained = user.currentskills.filter(currentskill => currentskill.skillId == skill.skillId).length != 0;
        return skill;
      });
      this.db.object(`/users/${userId}`).$ref.child('goal').update(user.goal);
    })
  }

  getActivities(skillId) {
    var activities = this.activities.filter(activity => {
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
    this.getUser(userId).subscribe(user => {
      var activity = this.activities.filter(activity => activity.id == activityId)[0];

      user.activities = user.activities.concat({ activityId: activity.id });

      activity.skillsGained.map(skill => {
        this.addSkill(userId, skill.id, skill.experience);
      })
    });
  }
}
