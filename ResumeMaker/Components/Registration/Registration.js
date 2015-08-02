define(["knockout", "text!./Registration.html", "postbox", "bootstrap", "BindingHandlers"], function (ko, RegistrationTemplate, CanvasItems, SystemProcesses) {
    function RegistrationViewModel(params) {

        var self = this;

        //self.HostWebUrl = ko.observable().publishOn('management.hostWebUrl');
           
        self.AlreadyRegistred = ko.observable().syncWith('Users.AlreadyRegistred');
        self.Login = function () {
            self.AlreadyRegistred(true);
        }
        self.UserName = ko.observable("Enter username");
        self.Password = ko.observable("Enter password");

        self.NewRegistration = function () {

            var URL = "http://localhost:60204/Services/Service1.svc/NewRegistration?username=" + self.UserName() + "&password=" + self.Password() + "";

            $.ajax({
                crossDomain: true,
                xhrFields: {
                    'withCredentials': true
                },
                url: URL,
                success: function (result) 
                {
                    console.log(result);
                   
                },
                failure: function (err) {
                    alert(err);
                }
            });
        
       

        }

        return self;
    }
    return { viewModel: RegistrationViewModel, template: RegistrationTemplate };
});