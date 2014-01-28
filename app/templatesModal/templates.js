(function () {
	var template = Handlebars.template,
		templates = Handlebars.templates = Handlebars.templates || {};
	templates['index.tpl'] = template(function (Handlebars, depth0, helpers, partials, data) {
		this.compilerInfo = [2, '>= 1.0.0-rc.3'];
		helpers = helpers || Handlebars.helpers;
		data = data || {};

		return "<div class=\"row\">\r\n	<br>\r\n    <div class=\"col-md-3\">\r\n		<button type=\"button\" id=\"alertString\" class=\"btn btn-warning\">Alert com string</button>\r\n    </div>\r\n    <div class=\"col-md-3\">\r\n		<button type=\"button\" id=\"alertObject\" class=\"btn btn-warning\">Alert com objeto</button>\r\n    </div>\r\n    <div class=\"col-md-3\">\r\n		<button type=\"button\" id=\"alertCallback\" class=\"btn btn-warning\">Alert com callback</button>\r\n    </div>\r\n    <div class=\"col-md-3\">\r\n		<div id=\"alertAlert\" class=\"alert alert-info\"></div>\r\n    </div>\r\n</div>\r\n<div class=\"row\">\r\n	<br>\r\n    <div class=\"col-md-3\">\r\n		<button type=\"button\" id=\"confirmString\" class=\"btn btn-warning\">confirm com string</button>\r\n    </div>\r\n    <div class=\"col-md-3\">\r\n		<button type=\"button\" id=\"confirmObject\" class=\"btn btn-warning\">confirm com objeto</button>\r\n    </div>\r\n    <div class=\"col-md-3\">\r\n		<button type=\"button\" id=\"confirmCallback\" class=\"btn btn-warning\">confirm com callback</button>\r\n    </div>\r\n</div>\r\n<div class=\"row\">\r\n	<br>\r\n    <div class=\"col-md-3\">\r\n		<button type=\"button\" id=\"promptString\" class=\"btn btn-warning\">prompt com string</button>\r\n    </div>\r\n    <div class=\"col-md-3\">\r\n		<button type=\"button\" id=\"promptObject\" class=\"btn btn-warning\">prompt com objeto</button>\r\n    </div>\r\n    <div class=\"col-md-3\">\r\n		<button type=\"button\" id=\"promptCallback\" class=\"btn btn-warning\">prompt com callback</button>\r\n    </div>\r\n</div>\r\n\r\n\r\n\r\n\r\n";
	});
	templates['multimodal.tpl'] = template(function (Handlebars, depth0, helpers, partials, data) {
		this.compilerInfo = [2, '>= 1.0.0-rc.3'];
		helpers = helpers || Handlebars.helpers;
		data = data || {};
		var buffer = "",
			stack1, stack2, options, functionType = "function",
			escapeExpression = this.escapeExpression,
			self = this,
			helperMissing = helpers.helperMissing;

		function program1(depth0, data) {

			var buffer = "",
				stack1;
			buffer += "\r\n			<div class=\"form-group\">\r\n				<label>";
			if (stack1 = helpers.message) {
				stack1 = stack1.call(depth0, {
					hash: {},
					data: data
				});
			}
			else {
				stack1 = depth0.message;
				stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1;
			}
			buffer += escapeExpression(stack1) + "</label>\r\n			";
			stack1 = helpers['if'].call(depth0, depth0.customEl, {
				hash: {},
				inverse: self.program(4, program4, data),
				fn: self.program(2, program2, data),
				data: data
			});
			if (stack1 || stack1 === 0) {
				buffer += stack1;
			}
			buffer += "\r\n			</div>\r\n		";
			return buffer;
		}

		function program2(depth0, data) {

			var buffer = "",
				stack1;
			buffer += "\r\n				";
			if (stack1 = helpers.customEl) {
				stack1 = stack1.call(depth0, {
					hash: {},
					data: data
				});
			}
			else {
				stack1 = depth0.customEl;
				stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1;
			}
			if (stack1 || stack1 === 0) {
				buffer += stack1;
			}
			buffer += "\r\n			";
			return buffer;
		}

		function program4(depth0, data) {

			var buffer = "",
				stack1;
			buffer += "\r\n				<input type=\"text\" class=\"form-control input-sm\" id=\"txtPrompt\" placeholder=\"";
			if (stack1 = helpers.placeholder) {
				stack1 = stack1.call(depth0, {
					hash: {},
					data: data
				});
			}
			else {
				stack1 = depth0.placeholder;
				stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1;
			}
			buffer += escapeExpression(stack1) + "\">\r\n			";
			return buffer;
		}

		function program6(depth0, data) {

			var buffer = "",
				stack1;
			buffer += "\r\n			";
			if (stack1 = helpers.message) {
				stack1 = stack1.call(depth0, {
					hash: {},
					data: data
				});
			}
			else {
				stack1 = depth0.message;
				stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1;
			}
			if (stack1 || stack1 === 0) {
				buffer += stack1;
			}
			buffer += "\r\n		";
			return buffer;
		}

		function program8(depth0, data) {

			var buffer = "",
				stack1, stack2, options;
			buffer += "\r\n			";
			options = {
				hash: {},
				inverse: self.program(11, program11, data),
				fn: self.program(9, program9, data),
				data: data
			};
			stack2 = ((stack1 = helpers.is), stack1 ? stack1.call(depth0, depth0.type, "prompt", options) : helperMissing.call(depth0, "is", depth0.type, "prompt", options));
			if (stack2 || stack2 === 0) {
				buffer += stack2;
			}
			buffer += "\r\n		";
			return buffer;
		}

		function program9(depth0, data) {

			var buffer = "",
				stack1;
			buffer += "\r\n				<button type=\"submit\" class=\"btn " + escapeExpression(((stack1 = ((stack1 = depth0.btnCancel), stack1 == null || stack1 === false ? stack1 : stack1['class'])), typeof stack1 === functionType ? stack1.apply(depth0) : stack1)) + "\" data-dismiss=\"modal\" id=\"btnCancel\">" + escapeExpression(((stack1 = ((stack1 = depth0.btnCancel), stack1 == null || stack1 === false ? stack1 : stack1.label)), typeof stack1 === functionType ? stack1.apply(depth0) : stack1)) + "</button>\r\n			";
			return buffer;
		}

		function program11(depth0, data) {

			var buffer = "",
				stack1;
			buffer += "\r\n				<button type=\"button\" class=\"btn " + escapeExpression(((stack1 = ((stack1 = depth0.btnCancel), stack1 == null || stack1 === false ? stack1 : stack1['class'])), typeof stack1 === functionType ? stack1.apply(depth0) : stack1)) + "\" data-dismiss=\"modal\" id=\"btnCancel\">" + escapeExpression(((stack1 = ((stack1 = depth0.btnCancel), stack1 == null || stack1 === false ? stack1 : stack1.label)), typeof stack1 === functionType ? stack1.apply(depth0) : stack1)) + "</button>\r\n			";
			return buffer;
		}

		buffer += "<div class=\"modal-dialog\">\r\n	<div class=\"modal-content\">\r\n		<div class=\"modal-header\">\r\n			<button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">&times;</button>\r\n			<h4 class=\"modal-title ";
		if (stack1 = helpers['class']) {
			stack1 = stack1.call(depth0, {
				hash: {},
				data: data
			});
		}
		else {
			stack1 = depth0['class'];
			stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1;
		}
		buffer += escapeExpression(stack1) + "\">";
		if (stack1 = helpers.title) {
			stack1 = stack1.call(depth0, {
				hash: {},
				data: data
			});
		}
		else {
			stack1 = depth0.title;
			stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1;
		}
		if (stack1 || stack1 === 0) {
			buffer += stack1;
		}
		buffer += "</h4>\r\n		</div>\r\n		<div class=\"modal-body ";
		if (stack1 = helpers['class']) {
			stack1 = stack1.call(depth0, {
				hash: {},
				data: data
			});
		}
		else {
			stack1 = depth0['class'];
			stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1;
		}
		buffer += escapeExpression(stack1) + "\">\r\n		";
		options = {
			hash: {},
			inverse: self.program(6, program6, data),
			fn: self.program(1, program1, data),
			data: data
		};
		stack2 = ((stack1 = helpers.is), stack1 ? stack1.call(depth0, depth0.type, "prompt", options) : helperMissing.call(depth0, "is", depth0.type, "prompt", options));
		if (stack2 || stack2 === 0) {
			buffer += stack2;
		}
		buffer += "\r\n		</div>\r\n		<div class=\"modal-footer ";
		if (stack2 = helpers['class']) {
			stack2 = stack2.call(depth0, {
				hash: {},
				data: data
			});
		}
		else {
			stack2 = depth0['class'];
			stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2;
		}
		buffer += escapeExpression(stack2) + "\">\r\n		";
		options = {
			hash: {},
			inverse: self.noop,
			fn: self.program(8, program8, data),
			data: data
		};
		stack2 = ((stack1 = helpers.isNot), stack1 ? stack1.call(depth0, depth0.type, "alert", options) : helperMissing.call(depth0, "isNot", depth0.type, "alert", options));
		if (stack2 || stack2 === 0) {
			buffer += stack2;
		}
		buffer += "\r\n			<button type=\"button\" class=\"btn btn-primary " + escapeExpression(((stack1 = ((stack1 = depth0.btnOK), stack1 == null || stack1 === false ? stack1 : stack1['class'])), typeof stack1 === functionType ? stack1.apply(depth0) : stack1)) + "\" data-dismiss=\"modal\" id=\"btnOK\">";
		stack2 = ((stack1 = ((stack1 = depth0.btnOK), stack1 == null || stack1 === false ? stack1 : stack1.label)), typeof stack1 === functionType ? stack1.apply(depth0) : stack1);
		if (stack2 || stack2 === 0) {
			buffer += stack2;
		}
		buffer += "</button>\r\n		</div>\r\n	</div>\r\n</div>";
		return buffer;
	});
})();