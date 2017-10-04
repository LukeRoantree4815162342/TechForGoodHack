import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
/*
  Generated class for the PersonalityProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class PersonalityProvider {
  private PUBLIC_KEY: string = "44840894d82172785e20f8814a";
  constructor(private http: Http) {

  }
  generateAssessment() {
    return this.http.get("api/assessment").map(res => res.json());
  }

  careerOptions(assessment: string, experienceRange: string, maxResults: number = 10) {
    const myHeaders = new Headers();
    myHeaders.append('Authorization', `Basic ${this.PUBLIC_KEY}:x`);
    const options = new RequestOptions({ headers: myHeaders });
    return this.http.get(`https://api.traitify.com/v1/assessments/${assessment}/matches/careers?number_of_matches=${maxResults}&experience_levels=${experienceRange}`,options).map(res => res.json());
  }
}
