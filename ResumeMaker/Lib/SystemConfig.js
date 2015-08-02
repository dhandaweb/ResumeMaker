!function () {

    //#region Setup
    var rm = {
        version: "1.0.0.0",
        Controls: {},
       };
    //#endregion 

    rm.Controls.items = function () {
        return [
             {
                 "ComponentName": "Introduction",
                 "Name": 'Introduction'
                 ,"Icon": "fa fa-book"
             },
             {
                 "ComponentName": "Education",
                 "Name": 'Education'
                 , "Icon": "fa fa-book"
             },
             {
                 "ComponentName": "Experience",
                 "Name": 'Experience'
                 , "Icon": "fa fa-book"
             },
            {
                "ComponentName": "Skills",
                "Name": 'Skills'
                , "Icon": "fa fa-book"
            },
            {
                "ComponentName": "Languages",
                "Name": 'Languages'
                , "Icon": "fa fa-tasks"
            },
            {
                "ComponentName": "Hobbies",
                "Name": 'Hobbies'
                , "Icon": "fa fa-book"
            },
            {
                "ComponentName": "Certification",
                "Name": 'Certification'
                , "Icon": "fa fa-book"
            },



        ];
    }

    //#region Finalize
    if (typeof define === "function" && define.amd) define(rm); else if (typeof module === "object" && module.exports) module.exports = rm;
    this.rm = rm;
    //#endregion

}();