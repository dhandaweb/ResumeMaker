define(["knockout", "text!./Hobbies.html", "postbox", "dragdrop", "bootstrap", "rm"], function (ko, HobbiesTemplate) {
    function HobbiesViewModel(params) {

        var self = this;
        self.introText = ko.observable("This is my Hobbies.");
       
        return self;
    }
    return { viewModel: HobbiesViewModel, template: HobbiesTemplate };
});