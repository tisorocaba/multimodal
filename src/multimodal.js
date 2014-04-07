var _ = require('underscore'),
	Backbone = require('backbone');
Marionette = require('marionette');

jQuery = $ = require('jquery');

require('bootstrap');

var Multimodal = (function () {
	function Multimodal() {
		this.App = null;
		this.Template = require('./template');
		this.Defaults = require('./defaults');

		$.fn.modal.Constructor.prototype.enforceFocus = function () {};

	}

	Multimodal.prototype.initialize = function (app, options) {
		this.App = app;
		_.extend(this.Defaults, options);
	};


	Multimodal.prototype.createModalEl = function (elementId) {

		elementId = elementId || 'modal';

		if ($('body #' + elementId).length === 0) {
			var modalHTML = '<div class="modal" id="' + elementId + '" tabindex="-1" role="dialog" aria-labelledby="modal" aria-hidden="true">';
			$('body').append(modalHTML);
		}
	};

	Multimodal.prototype.box = function (msg, callback, type) {
		var tpl,
			ret = null,
			elementId = type;

		if (typeof msg === 'string') {
			msg = {
				message: msg
			};
		}

		_.defaults(msg, this.Defaults[type]);

		this.createModalEl(elementId);

		var zindex = parseInt($('.modal.in:last').css('z-index'), 10);


		var $el = $('body #' + elementId);
		$el.html(this.Template(msg));
		$el.modal('show');


		if (zindex) {
			$el.css('z-index', parseInt(zindex, 10) + 1000);
		}

		var callbackClosure = function (ev) {
			callback(ret, ev);
			$el.unbind('hidden.bs.modal', callbackClosure);
		};

		var btnOkClosure = function (ev) {
			ret = msg.callbackReturnOk($el.find('#txtPrompt').val());
			$el.find('#btnOk').unbind('click', btnOkClosure);
		};

		var btnCancelClosure = function (ev) {
			ret = msg.callbackReturnCancel();
			$el.find('#btnCancel').unbind('click', btnCancelClosure);
		};

		var onRender = function (ev) {
			$el.find('#txtPrompt').focus();
			$el.unbind('shown.bs.modal', onRender);
		};

		$el.find('#btnOk').bind('click', btnOkClosure);
		$el.find('#btnCancel').bind('click', btnCancelClosure);

		$el.bind('shown.bs.modal', onRender);
		if (callback) {
			$el.bind('hidden.bs.modal', callbackClosure);
		}

	};

	Multimodal.prototype.alert = function (msg, callback) {
		this.box(msg, callback, 'alert');
	};

	Multimodal.prototype.confirm = function (msg, callback) {
		this.box(msg, callback, 'confirm');
	};

	Multimodal.prototype.prompt = function (msg, callback) {
		this.box(msg, callback, 'prompt');
	};

	Multimodal.prototype.notify = function (message, options) {
		var $alert, css, offsetAmount;

		options = options || {};
		console.log(options);
		console.log(this.Defaults.notify);

		_.defaults(options, this.Defaults.notify);

		console.log(options);

		$alert = $("<div>");
		$alert.attr("class", "bootstrap-growl alert");
		if (options.type) {
			$alert.addClass("alert-" + options.type);
		}
		if (options.allow_dismiss) {
			$alert.append("<span class=\"close\" data-dismiss=\"alert\">&times;</span>");
		}
		$alert.append(message);
		if (options.top_offset) {
			options.offset = {
				from: "top",
				amount: options.top_offset
			};
		}
		offsetAmount = options.offset.amount;
		$(".bootstrap-growl").each(function () {
			return Math.max(offsetAmount, parseInt($(this).css(options.offset.from), 10) + $(this).outerHeight() + options.stackup_spacing);
		});
		css = {
			"position": (options.ele === "body" ? "fixed" : "absolute"),
			"margin": 0,
			"z-index": "9999",
			"display": "none"
		};
		css[options.offset.from] = offsetAmount + "px";
		$alert.css(css);
		if (options.width !== "auto") {
			$alert.css("width", options.width + "px");
		}
		$(options.ele).append($alert);
		switch (options.align) {
		case "center":
			$alert.css({
				"left": "50%",
				"margin-left": "-" + ($alert.outerWidth() / 2) + "px"
			});
			break;
		case "left":
			$alert.css("left", "20px");
			break;
		default:
			$alert.css("right", "20px");
		}
		$alert.fadeIn();
		if (options.delay > 0) {
			$alert.delay(options.delay).fadeOut(function () {
				return $(this).alert("close");
			});
		}
		return $alert;
	};


	Multimodal.prototype.show = function (modalView, elementId, callback) {
		if (this.App === null) {
			console.error('Please use initialize function to add marionette application to multimodal');
			return false;
		}

		elementId = elementId || 'modal';

		this.createModalEl(elementId);

		var ModalRegion = Marionette.Region.extend({
			el: "#" + elementId,
			prevIndex: null,

			initialize: function () {
				this.on('show', this.showModal, this);
			},

			getEl: function (selector) {
				var $el = $(selector),
					that = this;

				// o nome do evento mudou na versão 3 do Bootstrap
				$el.on('hidden.bs.modal', function () {
					that.close();
					$el.remove(); // remove o modal do DOM
				});

				return $el;
			},

			showModal: function (view) {
				var zindex = parseInt($('.modal.in:last').css('z-index'), 10);

				view.on('close', this.hideModal, this);
				this.$el.modal({
					backdrop: 'static'
				});

				$('.modal-backdrop:gt(0)').remove();
				var bg = $('.modal-backdrop');

				if (zindex) {
					this.$el.css('z-index', zindex + 10);
					bg.css('z-index', parseInt(this.$el.css('z-index'), 10) - 1);
				}
			},

			hideModal: function () {
				this.$el.modal('hide');

				var zindex = parseInt($('.modal.in:last').css('z-index'), 10);
				var bg = $('.modal-backdrop');
				bg.css('z-index', zindex - 1);

				if (callback) {
					callback(modalView.modalReturn);
				}
			}
		});

		this.App.addRegions({
			modal: ModalRegion
		});

		this.App.modal.show(modalView);

	};
	return Multimodal;
})();

var multimodal = new Multimodal();
module.exports = multimodal;