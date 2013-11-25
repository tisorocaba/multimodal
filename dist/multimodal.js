
(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['multimodal.tpl'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, stack2, options, functionType="function", escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\r\n			<div class=\"form-group\">\r\n				<label>";
  if (stack1 = helpers.message) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.message; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</label>\r\n				<input type=\"text\" class=\"form-control input-sm\" id=\"txtPrompt\" placeholder=\"";
  if (stack1 = helpers.placeholder) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.placeholder; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\">\r\n			</div>\r\n		";
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\r\n			";
  if (stack1 = helpers.message) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.message; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n		";
  return buffer;
  }

function program5(depth0,data) {
  
  var buffer = "", stack1, stack2, options;
  buffer += "\r\n			";
  options = {hash:{},inverse:self.program(8, program8, data),fn:self.program(6, program6, data),data:data};
  stack2 = ((stack1 = helpers.is),stack1 ? stack1.call(depth0, depth0.type, "prompt", options) : helperMissing.call(depth0, "is", depth0.type, "prompt", options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\r\n		";
  return buffer;
  }
function program6(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\r\n				<button type=\"submit\" class=\"btn "
    + escapeExpression(((stack1 = ((stack1 = depth0.btnCancel),stack1 == null || stack1 === false ? stack1 : stack1['class'])),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" data-dismiss=\"modal\" id=\"btnCancel\">"
    + escapeExpression(((stack1 = ((stack1 = depth0.btnCancel),stack1 == null || stack1 === false ? stack1 : stack1.label)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</button>\r\n			";
  return buffer;
  }

function program8(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\r\n				<button type=\"button\" class=\"btn "
    + escapeExpression(((stack1 = ((stack1 = depth0.btnCancel),stack1 == null || stack1 === false ? stack1 : stack1['class'])),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" data-dismiss=\"modal\" id=\"btnCancel\">"
    + escapeExpression(((stack1 = ((stack1 = depth0.btnCancel),stack1 == null || stack1 === false ? stack1 : stack1.label)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</button>\r\n			";
  return buffer;
  }

  buffer += "<div class=\"modal-dialog\">\r\n	<div class=\"modal-content\">\r\n		<div class=\"modal-header\">\r\n			<button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">&times;</button>\r\n			<h4 class=\"modal-title ";
  if (stack1 = helpers['class']) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0['class']; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\">";
  if (stack1 = helpers.title) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.title; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</h4>\r\n		</div>\r\n		<div class=\"modal-body ";
  if (stack1 = helpers['class']) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0['class']; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\">\r\n		";
  options = {hash:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),data:data};
  stack2 = ((stack1 = helpers.is),stack1 ? stack1.call(depth0, depth0.type, "prompt", options) : helperMissing.call(depth0, "is", depth0.type, "prompt", options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\r\n		</div>\r\n		<div class=\"modal-footer ";
  if (stack2 = helpers['class']) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0['class']; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "\">\r\n		";
  options = {hash:{},inverse:self.noop,fn:self.program(5, program5, data),data:data};
  stack2 = ((stack1 = helpers.isNot),stack1 ? stack1.call(depth0, depth0.type, "alert", options) : helperMissing.call(depth0, "isNot", depth0.type, "alert", options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\r\n			<button type=\"button\" class=\"btn btn-primary "
    + escapeExpression(((stack1 = ((stack1 = depth0.btnOK),stack1 == null || stack1 === false ? stack1 : stack1['class'])),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" data-dismiss=\"modal\" id=\"btnOK\">";
  stack2 = ((stack1 = ((stack1 = depth0.btnOK),stack1 == null || stack1 === false ? stack1 : stack1.label)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1);
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "</button>\r\n		</div>\r\n	</div>\r\n</div>\r\n"
    + "\r\n		"
    + "\r\n		"
    + "\r\n"
    + "\r\n        	"
    + "\r\n        ";
  return buffer;
  });
})();
define("templatesModal", ["handlebars"], function(){});

/*
MULTIMODAL
v.0.0.3
*/
define('multimodal',['require','exports','module','handlebars','backbone','templatesModal'],function(require, exports, module){
	var Handlebars     = require('handlebars'),
		Backbone       = require('backbone');

		require('templatesModal');

	module.exports = function(App) {

		$.fn.modal.Constructor.prototype.enforceFocus = function() {};

		// Registra os helpers necessários para o correto funcionamento
		Handlebars.registerHelper('is', function(value, test, options) {
			if(value === test) {
				return options.fn(this);
			} else {
				return options.inverse(this);
			}
		});

		Handlebars.registerHelper('isNot', function(value, test, options) {
			if(value !== test) {
				return options.fn(this);
			} else {
				return options.inverse(this);
			}
		});

		return {
			defaults: {
				alert: {
					message: 'Mensagem',
					title: 'Aviso',
					btnOK: {
						label: 'OK',
						class: 'btn-primary',
						callbackReturn: function() {
							return null
						}
					},
					class: '',
					type: 'alert'
				},
				confirm: {
					message: 'Mensagem',
					title: 'Importante',
					btnOK: {
						label: 'OK',
						class: 'btn-primary',
						callbackReturn: function() {
							return true
						}
					},
					btnCancel: {
						label: 'Cancelar',
						class: 'btn-default',
						callbackReturn: function() {
							return false
						}
					},
					class: '',
					type: 'confirm'
				},
				prompt: {
					message: 'Mensagem',
					title: '',
					btnOK: {
						label: 'OK',
						class: 'btn-primary',
						callbackReturn: function(msg) {
							return msg
						}
					},
					btnCancel: {
						label: 'Cancelar',
						class: 'btn-default',
						callbackReturn: function() {
							return null
						}
					},
					class: '',
					type: 'prompt'
				}
			},

			createModalEl: function() {
				var modalHTML = '<div class="modal fade" id="modal" tabindex="-1" role="dialog" aria-labelledby="modal" aria-hidden="true">';

				if($('body #modal').length == 0){
					$('body').append(modalHTML)
				}
			},

			box: function (msg, callback, type) {
				var tpl;

				if(typeof msg == 'string'){
					msg={message: msg};
				}

				_.defaults(msg, this.defaults[type]);

				this.createModalEl();

				//HandleBars runtime compilation
				// var templates = ['multimodal.tpl']
				// _.each(templates, function(template){
				// 	var path = 'app/js/modules/' + template
				// 	source = $.ajax({
				// 		url: path,
				// 		cache: false,
				// 		async: false,
				// 	}).responseText;
				// 	tpl = Handlebars.compile(source);
				// });

				//HandleBars precompiled
				tpl = Handlebars.templates['multimodal.tpl']

				$('body #modal').html(tpl(msg));
				$('body #modal').modal('show');
				var ret = null;
				var callbackClosure = function(ev) {
					callback(ret, ev);
					$('body #modal').unbind('hidden.bs.modal', callbackClosure);
				}

				var btnOKClosure = function(ev) {
					ret = msg.btnOK.callbackReturn($('body #modal #txtPrompt').val());
					$('body #modal #btnOK').unbind('click', btnOKClosure);
				}

				var btnCancelClosure = function(ev) {
					ret = msg.btnCancel.callbackReturn();
					$('body #modal #btnCancel').unbind('click', btnCancelClosure);
				}


				var onRender = function(ev){
					$('body #modal #txtPrompt').focus()
					$('body #modal').unbind('shown.bs.modal', onRender);
				}

				$('body #modal #btnOK').bind('click', btnOKClosure);
				$('body #modal #btnCancel').bind('click', btnCancelClosure);

				$('body #modal').bind('shown.bs.modal', onRender);
				if (callback) {
					$('body #modal').bind('hidden.bs.modal', callbackClosure);
				}

			},

			alert: function(msg, callback) {
				this.box(msg, callback, 'alert');
			},

			confirm: function(msg, callback){
				this.box(msg, callback, 'confirm');
			},

			prompt: function(msg, callback){
				this.box(msg, callback, 'prompt');
			},

			show: function(modalView, callback){

				this.createModalEl();

				var ModalRegion = Backbone.Marionette.Region.extend({
					el: "#modal",

					initialize: function() {
						this.on('show', this.showModal, this);
					},

					getEl: function(selector) {
						var $el = $(selector);
						$el.on('hidden', this.close);
						return $el;
					},

					showModal: function(view) {
						view.on('close', this.hideModal, this);
						this.$el.modal({backdrop: 'static'});
					},

					hideModal: function() {
						this.$el.modal('hide');
						App.modal.currentView= null;
					},

					showPrevious: function(prevView) {
						var that = this;
						return function() {
							that.show(prevView);
						}
					}
				});

				App.addRegions({
					modal: ModalRegion
				});

				modalView.options.modalParent = App.main.currentView;
				App.modal.show(modalView);

				callbackClosure = function(ev) {
					modalView.close();

					callback(modalView.mensagem,{model: modalView.model, collection: modalView.collection},ev);
					$('body #modal').unbind('hidden.bs.modal', callbackClosure);
				}

				if (callback) {
					$('body #modal').bind('hidden.bs.modal', callbackClosure);
				}
			}
		}
	};
});