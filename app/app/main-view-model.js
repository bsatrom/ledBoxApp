var observable = require("data/observable");
var observableArray = require("data/observable-array");
var ViewModelItem = (function () {
    function ViewModelItem(title, info) {
        this.title = title;
        this.info = info;
    }
    return ViewModelItem;
})();
exports.ViewModelItem = ViewModelItem;
var items = new observableArray.ObservableArray();
items.push(new ViewModelItem("Show Temp", "Show the current temperature on the display"));
items.push(new ViewModelItem("Set Text", "Set some text on the display"));

exports.mainViewModel = new observable.Observable();
exports.mainViewModel.set("items", items);
