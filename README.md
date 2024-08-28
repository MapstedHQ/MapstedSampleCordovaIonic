## Mapsted

## Ionic requirements
You need to download below things

1. Node.js: https://nodejs.org/en/download/
2. NPM (Node Package Manager): Included with Node.js installation.
3. NVM (Node Version Manager): https://github.com/nvm-sh/nvm
4. Java JDK and JRE: https://www.oracle.com/java/technologies/javase-jdk15-downloads.html
5. Visual Studio Code: https://code.visualstudio.com/
6. Ionic CLI and Core (for both Cordova and Capacitor): https://ionicframework.com/docs/cli
7. Android Studio: https://developer.android.com/studio
8. Gradle: https://gradle.org/releases/
9. Xcode -version -15.0: Available through the Mac App Store or https://developer.apple.com/xcode/
10. CocoaPods: https://cocoapods.org/



## Installation


1. Clone the repo, then install the packages using:
```sh
npm install
```

2. Install mapsted plugin.
```bash
ionic cordova plugin add mapsted-cordova-plugin
npm install mapsted-awesome-cordova-plugin
```

3. Build android platform
```bash
ionic cordova build android
```

4. Build iOS platform
```bash
ionic cordova build ios
```

## Platform Specific Configurations

### iOS 

- Project/ios/Podfile Add source file on top.

```sh
source 'https://cdn.cocoapods.org/'

# To run in simulator add below source target
source 'https://github.com/Mapsted/podspec-simulator.git'

# To run in device add below source target
source 'https://github.com/Mapsted/podspec.git'
```

- Project/ios/Podfile set use frameworks in your app target

```sh
use_frameworks!
```

#### IMPORTANT
- Add license file in Resources folder `your_ios_license.key`


### Android

#### IMPORTANT
- Add license file in Assets folder('/app/src/main/assets') `your_android_license.key`



## API

<docgen-index>

* [`launchMapActivity()`](#addlistenerinitcallback)

</docgen-index>
