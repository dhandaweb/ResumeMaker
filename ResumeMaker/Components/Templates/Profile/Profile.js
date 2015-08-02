define(["knockout", "text!./Profile.html", "postbox", "dragdrop", "bootstrap", "rm"], function (ko, ProfileTemplate) {
    function ProfileViewModel(params) {

        var self = this;
         self.IntroHeading = ko.observable("Your name here");

            return self;
    }
    return { viewModel: ProfileViewModel, template: ProfileTemplate };
});