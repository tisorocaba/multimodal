(function () {
	var template = Handlebars.template,
		templates = Handlebars.templates = Handlebars.templates || {};
	templates['index.tpl'] = template(function (Handlebars, depth0, helpers, partials, data) {
		this.compilerInfo = [2, '>= 1.0.0-rc.3'];
		helpers = helpers || Handlebars.helpers;
		data = data || {};

		return "<div class=\"row\">\r\n	<br>\r\n    <div class=\"col-md-3\">\r\n		<button type=\"button\" id=\"alertString\" class=\"btn btn-warning\">Alert com string</button>\r\n    </div>\r\n    <div class=\"col-md-3\">\r\n		<button type=\"button\" id=\"alertObject\" class=\"btn btn-warning\">Alert com objeto</button>\r\n    </div>\r\n    <div class=\"col-md-3\">\r\n		<button type=\"button\" id=\"alertCallback\" class=\"btn btn-warning\">Alert com callback</button>\r\n    </div>\r\n    <div class=\"col-md-3\">\r\n		<div id=\"alertAlert\" class=\"alert alert-info\"></div>\r\n    </div>\r\n</div>\r\n<div class=\"row\">\r\n	<br>\r\n    <div class=\"col-md-3\">\r\n		<button type=\"button\" id=\"confirmString\" class=\"btn btn-warning\">confirm com string</button>\r\n    </div>\r\n    <div class=\"col-md-3\">\r\n		<button type=\"button\" id=\"confirmObject\" class=\"btn btn-warning\">confirm com objeto</button>\r\n    </div>\r\n    <div class=\"col-md-3\">\r\n		<button type=\"button\" id=\"confirmCallback\" class=\"btn btn-warning\">confirm com callback</button>\r\n    </div>\r\n</div>\r\n<div class=\"row\">\r\n	<br>\r\n    <div class=\"col-md-3\">\r\n		<button type=\"button\" id=\"promptString\" class=\"btn btn-warning\">prompt com string</button>\r\n    </div>\r\n    <div class=\"col-md-3\">\r\n		<button type=\"button\" id=\"promptObject\" class=\"btn btn-warning\">prompt com objeto</button>\r\n    </div>\r\n    <div class=\"col-md-3\">\r\n		<button type=\"button\" id=\"promptCallback\" class=\"btn btn-warning\">prompt com callback</button>\r\n    </div>\r\n</div>\r\n\r\n\r\n\r\n\r\n";
	});
})();