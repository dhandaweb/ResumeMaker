define(["knockout", "text!./Header.html", "postbox", "bootstrap"], function (ko, HeaderTemplate) {
    function HeaderViewModel(params) {

        var self = this;

        self.GetCredentials = function () {
            $.ajax({
                crossDomain: true,
                xhrFields: {
                    'withCredentials': true
                },
                url: "http://localhost:60204/Services/Service1.svc/GetCredentials",
                success: function (data) {
                    console.log(data);
                },
                failure: function (err) {
                    alert(err);
                }
            });
        }
        console.log("Loading the Header");


        return self;
    }
    return { viewModel: HeaderViewModel, template: HeaderTemplate };
});