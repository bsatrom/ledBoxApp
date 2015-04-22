var page;
var frames = require("ui/frame");
var vmModule = require("./home-viewModel");

function pageLoaded(args) {
    page = args.object;
    page.bindingContext = vmModule.mainViewModel;

    // iOS-Specific Status-Bar Work
    if (page.ios) {
      var controller = frames.topmost().ios.controller;

      var navBar = controller.navigationBar;
      var navigationItem = controller.visibleViewController.navigationItem;

      controller.navigationBarHidden = false;
      navBar.barTintColor = UIColor.colorWithRedGreenBlueAlpha(0.86, 0.20, 0.25, 1);
      navBar.titleTextAttributes =
        new NSDictionary([UIColor.whiteColor()],
                         [NSForegroundColorAttributeName]);

      navBar.barStyle = 1;
      navBar.tintColor = UIColor.whiteColor();
      page.ios.title = "LED Boxbot";

      // creates item with UIBarButtonSystemItemAction icon
      var shareItem = new UIBarButtonItem(UIBarButtonSystemItem.UIBarButtonSystemItemEdit, null, null);

      // add item to navigation bar
      var actionButtonItems = [shareItem];
      navigationItem.rightBarButtonItems = actionButtonItems;
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
