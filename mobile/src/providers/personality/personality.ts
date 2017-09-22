import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import * as config from '../../secrets';
/*
  Generated class for the PersonalityProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class PersonalityProvider {

  constructor(private http: Http) {

  }
  generateAssessment(){
  }

}
