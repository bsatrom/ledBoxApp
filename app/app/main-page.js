var frames = require("ui/frame");
var vmModule = require("./main-view-model");
var dialogsModule = require("ui/dialogs");
var http = require("http");
var spark = require("./shared/spark-helper");

var requestUrl = spark.baseUrl + spark.deviceId;
var requestBody = "access_token=" + spark.accessToken + "&args={N}+YEAH!";

function pageLoaded(args) {
    var page = args.object;
    page.bindingContext = vmModule.mainViewModel;

    try {
      http.request({ url: requestUrl + "/setText", method: "POST",
                     headers: spark.requestHeaders,
                     content: requestBody }).then(function (response) {
          var statusCode = response.statusCode;

          console.log("**** " + statusCode);

          dialogsModule.alert("Text Sent").then(function () {
      			console.log("**** dialogWorked");
      		});

          /*dialogs.alert(statusCode).then(function() {
            console.log("***** " + "Dialog closed!");
          });*/

      }, function (e) {

          console.log("ERROR ***** " + JSON.stringify(e));

          done(e);
      });
    } catch (e) {
      console.log("ERROR ***** " + JSON.stringify(e));
    }
}


exports.pageLoaded = pageLoaded;

function listViewItemTap(args) {
    frames.topmost().navigate({
        moduleName: "app/details-page",
        context: args.view.bindingContext
    });
}
exports.listViewItemTap = listViewItemTap;
