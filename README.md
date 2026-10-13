## Mapsted

## Ionic requirements
You need to download below things

1. Node.js: https://nodejs.org/en/download/
2. NPM (Node Package Manager): Included with Node.js installation.
3. NVM (Node Version Manager): https://github.com/nvm-sh/nvm
4. Java JDK 17: https://adoptium.net/temurin/releases/?version=17
5. Visual Studio Code: https://code.visualstudio.com/
6. Ionic CLI and Core (for both Cordova and Capacitor): https://ionicframework.com/docs/cli
7. Android Studio: https://developer.android.com/studio
8. Gradle: https://gradle.org/releases/
9. Xcode 26.3 or later (iOS 16.0+ deployment target): Available through the Mac App Store or https://developer.apple.com/xcode/
10. CocoaPods: https://cocoapods.org/



## Installation


1. Clone the repo, then install the packages using:
```sh
npm install
```

2. Install the Mapsted plugin (version 26.7.1, from GitHub — not the old `mapsted-cordova-plugin` package on npm):
```bash
ionic cordova plugin add https://github.com/MapstedHQ/mapsted-cordova-plugin.git#v26.7.1
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

- The plugin adds these CocoaPods sources to `platforms/ios/Podfile` for you. If you manage the Podfile yourself, it must contain:

```sh
source 'https://cdn.cocoapods.org/'
source 'https://github.com/MapstedHQ/podspec.git'
```

The same source works for both the simulator and devices.

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
