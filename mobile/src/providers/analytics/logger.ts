import { Injectable } from '@angular/core';
import { FirebaseAnalytics } from '@ionic-native/firebase-analytics';
@Injectable()
export class Logger {
    constructor(private analytics : FirebaseAnalytics) {
    }
    logScreenLoaded(screenName: string) {
        this.analytics.logEvent("page_view", { page: screenName });
    }
    logUserLoggedIn(userName: string) {
        this.analytics.setUserId(userName);
    }
}
