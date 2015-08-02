define(["knockout", "text!./Controls.html", "postbox", "dragdrop", "bootstrap", "rm"], function (ko, ControlsTemplate) {
    function ControlsViewModel(params) {

        var self = this;
        console.log(rm.Controls.items());
        self.MyControls = ko.observableArray(rm.Controls.items());
        console.log(self.MyControls());
       


        return self;
    }
    return { viewModel: ControlsViewModel, template: ControlsTemplate };
});