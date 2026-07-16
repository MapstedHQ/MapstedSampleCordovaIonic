import { Component, OnInit } from '@angular/core';
// import { FirebaseCrash } from '@awesome-cordova-plugins/firebase-crash/ngx';

// The mapsted-cordova-plugin clobbers a global `MapstedCordovaPlugin` bridge
// (see plugin.xml <clobbers target="MapstedCordovaPlugin" />). It exposes
// callback-style Cordova methods, e.g. launchMapActivity(success, error).
declare const MapstedCordovaPlugin: {
  launchMapActivity: (
    success: (result?: unknown) => void,
    error: (error?: unknown) => void
  ) => void;
  coolMethod: (
    arg0: unknown,
    success: (result?: unknown) => void,
    error: (error?: unknown) => void
  ) => void;
};

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage implements OnInit{

  echoVal!: string;
  constructor() {}

  ngOnInit(): void {
    console.log('ngOnInit');

  }

  async launchMap(){
    try {
      await new Promise<void>((resolve, reject) => {
        MapstedCordovaPlugin.launchMapActivity(() => resolve(), (err) => reject(err));
      });
    } catch (error) {
        console.error('Error launching map:', error);
        // Optionally, notify the user about the error
    }
  }

  // echo() {
  //   this.mapsted.echo("Hello Echo").then(
  //     (result: string) => {
  //       console.log(result);
  //       this.echoVal = result;
  //     },
  //     (error: any) => {
  //       console.error(error);
  //     }
  //   );
  // }

  // testCrash() {
  //   this.firebaseCrash.logError("This is a test crash");
  // }
}
