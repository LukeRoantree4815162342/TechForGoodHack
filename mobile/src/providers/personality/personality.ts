import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
/*
  Generated class for the PersonalityProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class PersonalityProvider {

  constructor(private http: Http) {

  }
  generateAssessment() {
    return this.http.get("http://localhost:5009/api/assessment").map(res=>res.json());
  }

}
