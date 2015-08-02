define(["knockout", "text!./Experience.html", "postbox", "dragdrop", "bootstrap", "rm"], function (ko, ExperienceTemplate) {
    function ExperienceViewModel(params) {

        var self = this;
        self.SaveExperience = function () {
            console.log("Saving Experience");
        }
       
        return self;
    }
    return { viewModel: ExperienceViewModel, template: ExperienceTemplate };
});