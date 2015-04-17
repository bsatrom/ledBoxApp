var dialogsModule = require("ui/dialogs");
var http = require("http");
var spark = require("../../shared/spark-helper");

var requestUrl = spark.baseUrl + spark.deviceId;
var requestBody = "access_token=" + spark.accessToken + "&args={N}+GOOD!";

function pageNavigatedTo(args) {
    var page = args.object;
    page.bindingContext = page.navigationContext;

    http.request({ url: requestUrl + "/setText", method: "POST",
                   headers: spark.requestHeaders,
                   content: requestBody }).then(function (response) {
        var statusCode = response.statusCode;

        console.log("**** " + statusCode);
    }, function (e) {
        console.log("ERROR ***** " + JSON.stringify(e));
        done(e);
    });
}
exports.pageNavigatedTo = pageNavigatedTo;
