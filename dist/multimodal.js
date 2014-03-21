!function(e){if("object"==typeof exports)module.exports=e();else if("function"==typeof define&&define.amd)define(e);else{var f;"undefined"!=typeof window?f=window:"undefined"!=typeof global?f=global:"undefined"!=typeof self&&(f=self),(f.baltazzar||(f.baltazzar={})).multimodal=e()}}(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(_dereq_,module,exports){
module.exports = {
	alert: {
		message: 'Mensagem',
		title: 'Aviso',
		btnOk: {
			label: 'OK',
			className: 'btn-primary'
		},
		callbackReturnOk: function () {
			return true;
		},
		className: '',
		type: 'alert'
	},
	confirm: {
		message: 'Mensagem',
		title: 'Importante',
		btnOk: {
			label: 'OK',
			className: 'btn-primary'
		},
		callbackReturnOk: function () {
			return true;
		},
		btnCancel: {
			label: 'Cancelar',
			className: 'btn-default'
		},
		callbackReturnCancel: function () {
			return false;
		},
		className: '',
		type: 'confirm'
	},
	prompt: {
		message: 'Mensagem',
		title: '',
		customEl: '',
		btnOk: {
			label: 'OK',
			className: 'btn-primary'
		},
		callbackReturnOk: function (msg) {
			return msg;
		},
		btnCancel: {
			label: 'Cancelar',
			className: 'btn-default'
		},
		callbackReturnCancel: function () {
			return null;
		},
		className: '',
		type: 'prompt'
	}
};
},{}],2:[function(_dereq_,module,exports){
var Template = _dereq_('./template');
var Defaults = _dereq_('./defaults');

var Multimodal = (function () {
	function Multimodal() {
		$.fn.modal.Constructor.prototype.enforceFocus = function () {};
	}

	Multimodal.prototype.createModalEl = function () {
		if ($('body #modal').length === 0) {
			var modalHTML = '<div class="modal fade" id="modal" tabindex="-1" role="dialog" aria-labelledby="modal" aria-hidden="true">';
			$('body').append(modalHTML);
		}
	};

	Multimodal.prototype.box = function (msg, callback, type) {
		var tpl,
			ret = null;


		if (typeof msg === 'string') {
			if (type === 'prompt') {
				msg = {
					message: msg,
				};
			}
			else {
				msg = {
					message: msg
				};
			}
		}

		_.defaults(msg, Defaults[type]);

		this.createModalEl();

		$('body #modal').html(Template(msg));
		$('body #modal').modal('show');

		var callbackClosure = function (ev) {
			callback(ret, ev);
			$('body #modal').unbind('hidden.bs.modal', callbackClosure);
		};

		var btnOkClosure = function (ev) {
			ret = msg.callbackReturnOk($('body #modal #txtPrompt').val());
			$('body #modal #btnOk').unbind('click', btnOkClosure);
		};

		var btnCancelClosure = function (ev) {
			ret = msg.callbackReturnCancel();
			$('body #modal #btnCancel').unbind('click', btnCancelClosure);
		};

		var onRender = function (ev) {
			$('body #modal #txtPrompt').focus();
			$('body #modal').unbind('shown.bs.modal', onRender);
		};

		$('body #modal #btnOk').bind('click', btnOkClosure);
		$('body #modal #btnCancel').bind('click', btnCancelClosure);

		$('body #modal').bind('shown.bs.modal', onRender);
		if (callback) {
			$('body #modal').bind('hidden.bs.modal', callbackClosure);
		}

	};

	Multimodal.prototype.alert = function (msg, callback) {
		this.box(msg, callback, 'alert');
	};

	Multimodal.prototype.confirm =  function (msg, callback) {
		this.box(msg, callback, 'confirm');
	};

	Multimodal.prototype.prompt = function (msg, callback) {
		this.box(msg, callback, 'prompt');
	};

	Multimodal.prototype.show = function (modalView, callback) {

		this.createModalEl();

		var ModalRegion = Backbone.Marionette.Region.extend({
			el: "#modal",

			initialize: function () {
				this.on('show', this.showModal, this);
			},

			getEl: function (selector) {
				var $el = $(selector);
				$el.on('hidden', this.close);
				return $el;
			},

			showModal: function (view) {
				view.on('close', this.hideModal, this);
				this.$el.modal({
					backdrop: 'static'
				});
			},

			hideModal: function () {
				this.$el.modal('hide');
				App.modal.currentView = null;
			},

			showPrevious: function (prevView) {
				var that = this;
				return function () {
					that.show(prevView);
				};
			}
		});

		App.addRegions({
			modal: ModalRegion
		});

		modalView.options.modalParent = App.main.currentView;
		App.modal.show(modalView);

		callbackClosure = function (ev) {
			modalView.close();

			$('body #modal').unbind('hidden.bs.modal', callbackClosure);
			callback(modalView.mensagem, {
				model: modalView.model,
				collection: modalView.collection
			}, ev);
		};

		if (callback) {
			$('body #modal').bind('hidden.bs.modal', callbackClosure);
		}
	};

	return Multimodal;
})();

module.exports = new Multimodal();
},{"./defaults":1,"./template":3}],3:[function(_dereq_,module,exports){
module.exports = function (options) {
	var modalDialog = $('<div class="modal-dialog">');

	var modalContent = $('<div class="modal-content">').appendTo(modalDialog);

	var modalHeader = $('<div class="modal-header">').appendTo(modalContent);

	$('<button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>')
		.appendTo(modalHeader);

	$('<h4 class="modal-title ' + options.className + '">' + options.title + '</h4>').appendTo(modalHeader);

	var modalBody = $('<div class="modal-body ' + options.className + '">').appendTo(modalContent);

	if (options.type === 'prompt') {
		var formGroup = $('<div class="form-group">').appendTo(modalBody);
		$('<label>' + options.message + '</label>').appendTo(formGroup);

		if (typeof customEl !== 'undefined') {
			$(customEl).appendTo(formGroup);
		}
		else {
			$('<input type="text" class="form-control input-sm" id="txtPrompt" placeholder="' + options.placeholder + '">')
				.appendTo(formGroup);
		}
	}
	else {
		modalBody.html(options.message);
	}

	var modalFooter = $('<div class="modal-footer ' + options.className + '">').appendTo(modalContent);

	if (options.type !== 'alert') {
		$('<button type="' + (options.type === 'prompt' ? 'submit' : 'button') + '" class="btn ' + options.btnCancel.className + '" data-dismiss="modal" id="btnCancel">' + options.btnCancel.label + '</button>')
			.appendTo(modalFooter);

	}

	$('<button type="button" class="btn ' + options.btnOk.className + '" data-dismiss="modal" id="btnOK">' + options.btnOk.label + '</button>')
		.appendTo(modalFooter);

	return modalDialog;
};
},{}]},{},[2])
(2)
});;