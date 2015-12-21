*MULTIMODAL*
==========

**A flexible modal component for Bootstrap &amp; Backbone JS**

Examples:

1) Simple alert

	```javascript
	Multimodal.alert('Sua mensagem aqui');
	```


2) Custom confirm

	```javascript
	Multimodal.confirm({
		message: 'Deseja realmente continuar?',
		btnOk: {
			label: 'Sim, por favor!',
			className: 'btn-primary'
		},
		btnCancel: {
			label: 'Não, Jamais!',
			className: 'btn-default'
		},
		callbackReturnOk: function () {
			return true;
		},
		callbackReturnCancel: function () {
			return false;
		}
	});
	```

3) Confirm inline

	```javascript
	Multimodal.confirmInline({
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
		}
	});
	```

4) Prompt

	```javascript
	Multimodal.prompt({
		message: 'Mensagem',
		title: '',
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
		}
	});
	```

5) Notify alert

	```javascript
	Multimodal.notify({
		type: "info", // [warning, primary, danger, default]
		offset: {
			from: "top",
			amount: 20
		},
		align: "right",
		width: 250,
		delay: 4000,
		allow_dismiss: true,
		stackup_spacing: 10
	});
	```
