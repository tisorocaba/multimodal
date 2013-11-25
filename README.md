multimodal
==========

A flexible modal component for Bootstrap &amp; Backbone

Examples:

1) Custom confirm

Multimodal.confirm({
	message: 'Deseja realmente continuar?', 
	btnOK: {
		label: 'Sim', 
		callbackReturn: function() {
			alert('sim');
		}
	},
	btnCancel: {
		label: 'Não', 
		callbackReturn: function() {
			alert('nao');
		}	
	}
});