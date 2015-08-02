define(["knockout", "text!./Canvas.html", "postbox", "dragdrop", "bootstrap"], function (ko, CanvasTemplate) {
    function CanvasViewModel(params) {

        var self = this;


        self.ControlsList = ko.observableArray();
        self.Count = 0;

        self.ControlDropped = function (data) {
            self.ControlsList.push(data);
        }
        self.RemoveControl = function (data) {
            self.ControlsList.remove(data);
        }
        

        return self;
    }
    return { viewModel: CanvasViewModel, template: CanvasTemplate };
});