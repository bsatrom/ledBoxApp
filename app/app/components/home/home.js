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
      navBar.barTintColor = UIColor.colorWithRedGreenBlueAlpha(0.86, 0.25, 0.23, 1);
      navBar.titleTextAttributes =
        new NSDictionary([UIColor.whiteColor()],
                         [NSForegroundColorAttributeName]);

      navBar.barStyle = 1;
      navBar.tintColor = UIColor.whiteColor();
      page.ios.title = "LED Boxbot";
    }
}


exports.pageLoaded = pageLoaded;

function listViewItemTap(args) {
    var items = vmModule.mainViewModel.get("items");
    var item = items.getItem(args.index);

    //console.log("****IDX " + JSON.stringify(item));
    frames.topmost().navigate({
        moduleName: "app/components/" + item.component + "/" + item.component,
        context: args.view.bindingContext
    });
}
exports.listViewItemTap = listViewItemTap;

function tempTap(args) {

}
exports.tempTap = tempTap;
