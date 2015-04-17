var frames = require("ui/frame");
var vmModule = require("./home-viewModel");

function pageLoaded(args) {
    var page = args.object;
    page.bindingContext = vmModule.mainViewModel;

    // iOS-Specific Status-Bar Work
    if (page.ios) {
      var controller = frames.topmost().ios.controller;

      var navBar = controller.navigationBar;
      controller.navigationBarHidden = false;
      navBar.barTintColor = UIColor.colorWithRedGreenBlueAlpha(0.86, 0.20, 0.25, 1);
      navBar.titleTextAttributes =
        new NSDictionary([UIColor.whiteColor()],
                         [NSForegroundColorAttributeName]);

      navBar.barStyle = 1;
      navBar.tintColor = UIColor.whiteColor();
      page.ios.title = "LED Boxbot";
    }
}


exports.pageLoaded = pageLoaded;

function tempTap(args) {
  frames.topmost().navigate({ moduleName: "app/components/weather/weather" });
}
exports.tempTap = tempTap;

function textTap(args) {
  frames.topmost().navigate({ moduleName: "app/components/text/text" });
}
exports.textTap = textTap;

function newsTap(args) {
  frames.topmost().navigate({ moduleName: "app/components/news/news" });
}
exports.newsTap = newsTap;

function stocksTap(args) {
  frames.topmost().navigate({ moduleName: "app/components/stocks/stocks" });
}
exports.stocksTap = stocksTap;

function plasmaTap(args) {
  frames.topmost().navigate({ moduleName: "app/components/plasma/plasma" });
}
exports.plasmaTap = plasmaTap;

function randomTap(args) {
  frames.topmost().navigate({ moduleName: "app/components/random/random" });
}
exports.randomTap = randomTap;
