import { MockDataProvider } from './mock-data';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth';
import * as config from '../../secrets';
let service: MockDataProvider;
let auth: AngularFireAuth;
describe('dataservice', () => {
  beforeEach(done => {
    TestBed.configureTestingModule({
      declarations: [], // declare the test component
      imports: [
        AngularFireModule.initializeApp(config.default.firebaseConfig),
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