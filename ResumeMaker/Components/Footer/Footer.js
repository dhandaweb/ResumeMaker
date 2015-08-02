define(["knockout", "text!./Footer.html", "postbox", "bootstrap"], function (ko, FooterTemplate) {
    function FooterViewModel(params) {

        var self = this;

       
        console.log("Loading the Footer");


        return self;
    }
    return { viewModel: FooterViewModel, template: FooterTemplate };
});