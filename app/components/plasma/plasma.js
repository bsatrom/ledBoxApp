var dialogsModule = require("ui/dialogs");
var http = require("http");
var spark = require("../../shared/spark-helper");
var view = require("ui/core/view");

var requestUrl = spark.baseUrl + spark.deviceId;
var requestBody = "access_token=" + spark.accessToken + "";

function pageNavigatedTo(args) {
    var page = args.object;
    page.bindingContext = page.navigationContext;

    // iOS-Specific Status-Bar Work
    if (page.ios) {
      page.ios.title = "Show Plasma";
    }
}
exports.pageNavigatedTo = pageNavigatedTo;

function sendTapped(args) {
  var sender = args.object;
  var parent = sender.parent;

  if (parent) {
    http.request({ url: requestUrl + "/showPlasma", method: "POST",
                   headers: spark.requestHeaders,
                   content: requestBody }).then(function (response) {
        var statusCode = response.statusCode;

        console.log("**** " + statusCode);
    }, function (e) {
        console.log("ERROR ***** " + JSON.stringify(e));
        done(e);
    });
  }
}
exports.sendTapped = sendTapped;
