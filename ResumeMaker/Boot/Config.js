var require = {
	baseUrl: "./",
	paths: {
	    "text": "Lib/require/text",
	    "jquery": "Lib/jquery/jquery-2.1.3.min",
	    "jqui": "Lib/jquery/jquery-ui.min",
	    "knockout": "Lib/knockout/knockout-3.3.0.min",
	    "postbox": "Lib/knockout/plugins/knockout-postbox.min",
	    "dragdrop": "Lib/knockout/plugins/knockout.dragdrop",
	    "bootstrap": "Lib/bootstrap/bootstrap.min",
	    "BindingHandlers": "Script/BindingHandlers",
	    "rm": "Lib/SystemConfig"

	},
	shim: {
		"jqui":
			{
			exports: "$",
			deps: ['jquery']
			},
		"bootstrap":
			{
				"deps": ['jquery']
			}

	}
}