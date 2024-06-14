import { Component } from '@angular/core';
import { FirebaseCrash } from '@awesome-cordova-plugins/firebase-crash/ngx';
import { Platform } from '@ionic/angular';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(
    private firebaseCrashlytics: FirebaseCrash,
    private platform: Platform
  ) {
    this.initialize();
  }

  async initialize() {
    await this.platform.ready();
    // const firebaseConfig = {
    //   apiKey: "YOUR_FIREBASE_API_KEY",
    //   authDomain: "your-firebase-project-id.firebaseapp.com",
    //   projectId: "your-firebase-project-id",
    //   storageBucket: "your-firebase-project-id.appspot.com",
    //   messagingSenderId: "000000000000",
    //   appId: "1:000000000000:web:0000000000000000000000",
    //   measurementId: "G-XXXXXXXXXX"
    // };
    
    // Initialize Firebase
    const result = await this.firebaseCrashlytics.log("test crash message")
    console.log('firebaseCrashlytics successfully init', result);
  }
}
