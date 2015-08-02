define(["knockout", "text!./Login.html", "postbox", "bootstrap", "BindingHandlers"], function (ko, LoginTemplate, CanvasItems, SystemProcesses) {
    function LoginViewModel(params) {

        var self = this;

        self.CanLogin = ko.observable(false);
        self.AlreadyRegistred = ko.observable(true).syncWith('Users.AlreadyRegistred');

        self.UserName = ko.observable("Enter username");
        self.Password = ko.observable("Enter password");

        self.NewRegistration = function () {
            self.AlreadyRegistred(false);
        }

        self.CheckCredentials = function () {

            var URL = "http://localhost:60204/Services/Service1.svc/DataBaseConnection?username=" + self.UserName() + "&password=" + self.Password() + "";

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
    return { viewModel: LoginViewModel, template: LoginTemplate };
});