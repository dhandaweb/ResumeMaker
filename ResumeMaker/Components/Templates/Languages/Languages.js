define(["knockout", "text!./Languages.html", "postbox", "dragdrop", "bootstrap", "rm"], function (ko, LanguagesTemplate) {
    function LanguagesViewModel(params) {

        var self = this;
        self.introText = ko.observable("This is my Languages.");
       
        return self;
    }
    return { viewModel: LanguagesViewModel, template: LanguagesTemplate };
});