var $ = require('jquery');

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
