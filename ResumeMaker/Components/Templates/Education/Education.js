define(["knockout", "text!./Education.html", "postbox", "dragdrop", "bootstrap", "rm"], function (ko, EducationTemplate) {
    function EducationViewModel(params) {

        var self = this;
        self.introText = ko.observable("This is my education.");
       
        return self;
    }
    return { viewModel: EducationViewModel, template: EducationTemplate };
});