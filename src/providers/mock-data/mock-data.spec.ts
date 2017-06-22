import { MockDataProvider } from './mock-data';
import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth';
import { Observable } from "rxjs/Observable";
import * as config from '../../secrets';
let service: MockDataProvider;
let auth: AngularFireAuth;
describe('dataservice', () => {
  beforeEach(done => {
    TestBed.configureTestingModule({
      declarations: [], // declare the test component
      imports: [
        AngularFireModule.initializeApp({
          "apiKey": "AIzaSyDX6My3ivHiHDudgOVsQ6AOkIRhLPdr53Q",
          "authDomain": "mypotential-7afbb.firebaseapp.com",
          "databaseURL": "https://mypotential-7afbb.firebaseio.com",
          "projectId": "mypotential-7afbb",
          "storageBucket": "mypotential-7afbb.appspot.com",
          "messagingSenderId": "552620084220"
        }),
        AngularFireDatabaseModule,
        AngularFireAuthModule
      ],
      providers: [MockDataProvider]
    }).compileComponents().then(fin => {
      //get the injected instances
      service = TestBed.get(MockDataProvider);
      auth = TestBed.get(AngularFireAuth);
      auth.auth.signInWithEmailAndPassword(config.default.testuser.username, config.default.testuser.password).then(data => {
        done();
      });
    });
  });
  it('should get first user', done => {
    service.getData('/users/0').subscribe(data => {
      expect(data.name).toEqual('Simon Mcgregor');
      done();
    });
  });
});