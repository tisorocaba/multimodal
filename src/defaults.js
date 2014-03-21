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