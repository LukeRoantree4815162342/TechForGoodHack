import { Injectable } from '@angular/core';
import 'rxjs/add/observable/forkJoin';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';

import { AngularFireDatabase, FirebaseObjectObservable } from 'angularfire2/database';
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/take";
/*
  Generated class for the MockDataProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class MockDataProvider {

  private data;
  public skills;
  public activities;
  public goals;
  public questions;
  constructor(private db: AngularFireDatabase) {
    this.getSharedData().subscribe(data => {
      console.log(data);
    });
  }
  getSharedData() {
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
  getUser(userId): Observable<any> {
    return this.getData(`/users/${userId}`).map(user => {
      console.log(user);

      // var user = this.data.users.filter(user => user.id == userId)[0];
      if (user.currentskills) {
        user.currentskills.map(skill => {
          skill.object = this.getSkill(skill.skillId);
          return skill;
        });
      }
      // if (user.friends) {
      //   user.friends.map(friend => {
      //     this.getFriend(friend.friendId).subscribe(friend => {
      //       friend.object = friend;
      //       return friend;
      //     });
      //   });
      // }
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
    answeredQuestions.filter(q => q.yes).map(q => {
      this.addSkill(userId, q.skill, q.experience);
    });
    this.getUser(userId);//dont remove line, breaks the method (for some crazy reason...)
  }

  addSkill(userId, skillId, story) {
    this.getUser(userId).subscribe(user => {
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

      //this.updateUser(userId, user);
    });
  }

  // updateUser(userId, newUser) {
  //   this.data.users = this.data.users.map(user => {
  //     if (user.id == userId) {
  //       user = newUser;
  //     }
  //     return user;
  //   });
  // }

  saveGoal(userId, newGoal) {
    this.getUser(userId).subscribe(user => {
      user.goal = this.data.goals.filter(goal => goal.title == newGoal)[0];

      console.log(this.getUser(userId));
      var user = this.data.users.filter(user => user.id == userId)[0];

      user.goal.skills.map(skill => {
        skill.object = this.getSkill(skill.skillId);
        skill.obtained = user.currentskills.filter(currentskill => currentskill.skillId == skill.skillId).length != 0;
        return skill;
      });
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
      var activity = this.data.activities.filter(activity => activity.id == activityId)[0];

      user.activities = user.activities.concat({ activityId: activity.id });

      activity.skillsGained.map(skill => {
        this.addSkill(userId, skill.id, skill.experience);
      })
    });
  }
}
