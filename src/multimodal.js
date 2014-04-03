'use strict';


var $ = require('jquery'),
	_ = require('underscore'),
	Backbone = require('backbone'),
	Template = require('./template'),
	Defaults = require('./defaults');
	jQuery = $;
	require('bootstrap');

var Multimodal = (function () {
	function Multimodal(App) {
		this.App = App;
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
			msg = {
				message: msg
			};
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

	Multimodal.prototype.confirm = function (msg, callback) {
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
				this.App.modal.currentView = null;
			},

			showPrevious: function (prevView) {
				var that = this;
				return function () {
					that.show(prevView);
				};
			}
		});

		this.App.addRegions({
			modal: ModalRegion
		});

		modalView.options.modalParent = this.App.main.currentView;
		this.App.modal.show(modalView);

		var callbackClosure = function (ev) {
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
