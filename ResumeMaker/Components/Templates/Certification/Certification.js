define(["knockout", "text!./Certification.html", "postbox", "dragdrop", "bootstrap", "rm"], function (ko, CertificationTemplate) {
    function CertificationViewModel(params) {

        var self = this;
        self.introText = ko.observable("This is my Certification.");
       
        return self;
    }
    return { viewModel: CertificationViewModel, template: CertificationTemplate };
});