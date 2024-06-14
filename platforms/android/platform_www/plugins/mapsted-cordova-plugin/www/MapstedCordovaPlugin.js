cordova.define("mapsted-cordova-plugin.MapstedCordovaPlugin", function(require, exports, module) {
var exec = require("cordova/exec");

var PLUGIN_NAME = "MapstedCordovaPlugin";

exports.coolMethod = function (arg0, success, error) {
  exec(success, error, PLUGIN_NAME, "coolMethod", [arg0]);
};

module.exports.launchMapActivity = function (success, error) {
  exec(success, error, PLUGIN_NAME, "launchMapActivity", []);
};
});
