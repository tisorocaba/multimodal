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
	confirmInline: {
		message: 'Confirm Action?',
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
		type: 'confirmInline'
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
	},
	notify: {
		ele: "body",
		type: "info",
		offset: {
			from: "top",
			amount: 20
		},
		align: "right",
		width: 250,
		delay: 4000,
		allow_dismiss: true,
		stackup_spacing: 10
	}
};