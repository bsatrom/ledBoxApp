var frames = require("ui/frame");
var vmModule = require("./home-viewModel");

function pageLoaded(args) {
    var page = args.object;
    page.bindingContext = vmModule.mainViewModel;
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
