var observable = require("data/observable");
var observableArray = require("data/observable-array");
var ViewModelItem = (function () {
    function ViewModelItem(title, component, info) {
        this.title = title;
        this.component = component;
        this.info = info;
    }
    return ViewModelItem;
})();
exports.ViewModelItem = ViewModelItem;
var items = new observableArray.ObservableArray();

items.push(new ViewModelItem("Show Temp", "weather", "Show the current temperature"));
items.push(new ViewModelItem("Set Text", "text", "Set text on the display"));

exports.mainViewModel = new observable.Observable();
exports.mainViewModel.set("items", items);
