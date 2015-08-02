define(["knockout", "text!./Skills.html", "postbox", "dragdrop", "bootstrap", "rm"], function (ko, SkillsTemplate) {
    function SkillsViewModel(params) {

        var self = this;
        self.introText = ko.observable("These are my skills");
       
        return self;
    }
    return { viewModel: SkillsViewModel, template: SkillsTemplate };
});