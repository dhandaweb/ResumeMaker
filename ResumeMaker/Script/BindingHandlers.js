define(["knockout", "jquery", "bootstrap"], function (ko) {


    console.log("Calling this custom binding handler");

    ko.bindingHandlers.ContentEditable = {
        init: function (element, valueAccessor) {

            var textVal = valueAccessor();

            $(element).attr("contenteditable", "true");

            $(element).blur(function () {
                textVal($(element).text());
            });
        },
        update: function (element, valueAccessor) {
            var textVal = valueAccessor();
            $(element).text(textVal());
        }
    };
});