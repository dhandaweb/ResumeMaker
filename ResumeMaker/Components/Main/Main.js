define(["knockout", "text!./Main.html", "postbox", "bootstrap", "BindingHandlers"], function (ko, MainTemplate, CanvasItems, SystemProcesses) {
    function MainViewModel(params) {

        var self = this;

       
        console.log("I am calling this main component");


        return self;
    }
    return { viewModel: MainViewModel, template: MainTemplate };
});