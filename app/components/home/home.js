var applicationModule = require("application");
var colorModule = require("color");
var frames = require("ui/frame");
var page;

function pageLoaded(args) {
    page = args.object;

    // iOS-Specific Status-Bar Work
    if (applicationModule.ios) {
      page.ios.title = "LED Boxbot";
      frames.topmost().ios.navBarVisibility = "always";
      
      var controller = frames.topmost().ios.controller;
      var navBar = controller.navigationBar;

      navBar.barTintColor = new colorModule.Color("#E0515C").ios;
      navBar.titleTextAttributes =
        new NSDictionary([UIColor.whiteColor()],
                         [NSForegroundColorAttributeName]);
      navBar.tintColor = new colorModule.Color("#FFFFFF").ios;

      controller.navigationBarHidden = false;
    }
}


exports.pageLoaded = pageLoaded;

function tempTap(args) {
  changeTitleForBackButton();

  frames.topmost().navigate({ moduleName: "components/weather/weather" });
}
exports.tempTap = tempTap;

function textTap(args) {
  changeTitleForBackButton();

  frames.topmost().navigate({ moduleName: "components/text/text" });
}
exports.textTap = textTap;

function newsTap(args) {
  changeTitleForBackButton();

  frames.topmost().navigate({ moduleName: "components/news/news" });
}
exports.newsTap = newsTap;

function stocksTap(args) {
  changeTitleForBackButton();

  frames.topmost().navigate({ moduleName: "components/stocks/stocks" });
}
exports.stocksTap = stocksTap;

function plasmaTap(args) {
  changeTitleForBackButton();

  frames.topmost().navigate({ moduleName: "components/plasma/plasma" });
}
exports.plasmaTap = plasmaTap;

function randomTap(args) {
  changeTitleForBackButton();

  frames.topmost().navigate({ moduleName: "components/random/random" });
}
exports.randomTap = randomTap;

// No idea why this is needed
function changeTitleForBackButton() {
  if (page.ios) {
      page.ios.title = "Back";
  }
}
