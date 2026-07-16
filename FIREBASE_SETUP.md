# Firebase configuration (placeholder)

`google-services.json` and `GoogleService-Info.plist` in this sample are **placeholders**.
They contain no real credentials and are provided only so the project structure builds.

The sample wires Firebase Crashlytics (`cordova-plugin-firebase-crash`) as an optional demo.
To enable Crashlytics reporting against your own backend:

1. Create a Firebase project in the [Firebase console](https://console.firebase.google.com/).
2. Register an Android app (`com.mapsted.sampleionic`) and an iOS app (`com.mapsted.sampleionic`).
3. Download your own `google-services.json` (Android) and `GoogleService-Info.plist` (iOS) and
   replace the placeholder files at the project root.

Without your own config, the app still builds and runs; Crashlytics simply reports nothing.
