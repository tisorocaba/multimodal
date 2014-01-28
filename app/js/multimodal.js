/*
MULTIMODAL
v.0.0.5
*/
define(function (require, exports, module) {
	var Handlebars = require('handlebars'),
		Backbone = require('backbone');

	require('templatesModal');

	module.exports = function (App) {

		$.fn.modal.Constructor.prototype.enforceFocus = function () {};

		// Registra os helpers necessários para o correto funcionamento
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

		return {
			defaults: {
				alert: {
					message: 'Mensagem',
					title: 'Aviso',
					btnOK: {
						label: 'OK',
						class: 'btn-primary',
						callbackReturn: function () {
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
						callbackReturn: function () {
							return true
						}
					},
					btnCancel: {
						label: 'Cancelar',
						class: 'btn-default',
						callbackReturn: function () {
							return false
						}
					},
					class: '',
					type: 'confirm'
				},
				prompt: {
					message: 'Mensagem',
					title: '',
					customEl: '',
					btnOK: {
						label: 'OK',
						class: 'btn-primary',
						callbackReturn: function (msg) {
							return msg
						}
					},
					btnCancel: {
						label: 'Cancelar',
						class: 'btn-default',
						callbackReturn: function () {
							return null
						}
					},
					class: '',
					type: 'prompt'
				}
			},

			createModalEl: function () {
				var modalHTML = '<div class="modal fade" id="modal" tabindex="-1" role="dialog" aria-labelledby="modal" aria-hidden="true">';

				if ($('body #modal').length == 0) {
					$('body').append(modalHTML);
				}
			},

			box: function (msg, callback, type) {
				var tpl;

				if (typeof msg == 'string') {
					if (type == 'prompt') {
						msg = {
							message: msg,
							customEl: customEl
						};
					}
					else {
						msg = {
							message: msg
						};
					}
				}

				_.defaults(msg, this.defaults[type]);

				this.createModalEl();

				//HandleBars precompiled
				tpl = Handlebars.templates['multimodal.tpl']

				$('body #modal').html(tpl(msg));
				$('body #modal').modal('show');
				var ret = null;
				var callbackClosure = function (ev) {
					callback(ret, ev);
					$('body #modal').unbind('hidden.bs.modal', callbackClosure);
				}

				var btnOKClosure = function (ev) {
					ret = msg.btnOK.callbackReturn($('body #modal #txtPrompt').val());
					$('body #modal #btnOK').unbind('click', btnOKClosure);
				}

				var btnCancelClosure = function (ev) {
					ret = msg.btnCancel.callbackReturn();
					$('body #modal #btnCancel').unbind('click', btnCancelClosure);
				}

				var onRender = function (ev) {
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

			alert: function (msg, callback) {
				this.box(msg, callback, 'alert');
			},

			confirm: function (msg, callback) {
				this.box(msg, callback, 'confirm');
			},

			prompt: function (msg, callback) {
				this.box(msg, callback, 'prompt');
			},

			show: function (modalView, callback) {

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
						}
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
				}

				if (callback) {
					$('body #modal').bind('hidden.bs.modal', callbackClosure);
				}
			}
		}
	};
});