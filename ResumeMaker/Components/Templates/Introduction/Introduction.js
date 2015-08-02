define(["knockout", "text!./Introduction.html", "postbox", "dragdrop", "bootstrap", "rm"], function (ko, IntroductionTemplate) {
    function IntroductionViewModel(params) {

        var self = this;
        self.IntroDetail = ko.observable("Fusce vitae porttitor a, euismod convallis nisl, blandit risus tortor, pretium. Vehicula vitae, imperdiet vel, ornare enim vel sodales rutrum");
        self.IntroHeading = ko.observable("Your name here");

            return self;
    }
    return { viewModel: IntroductionViewModel, template: IntroductionTemplate };
});