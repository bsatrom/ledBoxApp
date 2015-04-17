var frames = require("ui/frame");
var dialogsModule = require("ui/dialogs");
var http = require("http");
var spark = require("../../shared/spark-helper");

var requestUrl = spark.baseUrl + spark.deviceId;
var requestBody = "access_token=" + spark.accessToken + "";

function pageNavigatedTo(args) {
    var page = args.object;
    page.bindingContext = page.navigationContext;

    // iOS-Specific Status-Bar Work
    if (page.ios) {
      var controller = frames.topmost().ios.controller;
      var navigationItem = controller.visibleViewController.navigationItem;

      page.ios.title = "Show Weather";
    }
}
exports.pageNavigatedTo = pageNavigatedTo;

function sendTapped(args) {
  // Get the text
  requestBody += "&args="; //ADD CITY from args

  http.request({ url: requestUrl + "/showWeather", method: "POST",
                 headers: spark.requestHeaders,
                 content: requestBody }).then(function (response) {
      var statusCode = response.statusCode;

      console.log("**** " + statusCode);
  }, function (e) {
      console.log("ERROR ***** " + JSON.stringify(e));
      done(e);
  });
}
exports.sendTapped = sendTapped;
