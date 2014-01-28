define([
		'handlebars'
	],
	function (Handlebars) {

		Handlebars.registerHelper('is', function (value, test, options) {
			if (value === test) {
				return options.fn(this);
			}
			else {
				return options.inverse(this);
			}
		});

		Handlebars.registerHelper('isNot', function (value, test, options) {
			if (value !== test) {
				return options.fn(this);
			}
			else {
				return options.inverse(this);
			}
		});
	})