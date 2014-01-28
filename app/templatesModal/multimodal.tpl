<div class="modal-dialog">
	<div class="modal-content">
		<div class="modal-header">
			<button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
			<h4 class="modal-title {{class}}">{{{title}}}</h4>
		</div>
		<div class="modal-body {{class}}">
		{{#is type "prompt"}}
			<div class="form-group">
				<label>{{message}}</label>
			{{#if customEl}}
				{{{customEl}}}
			{{else}}
				<input type="text" class="form-control input-sm" id="txtPrompt" placeholder="{{placeholder}}">
			{{/if}}
			</div>
		{{else}}
			{{{message}}}
		{{/is}}
		</div>
		<div class="modal-footer {{class}}">
		{{#isNot type "alert"}}
			{{#is type "prompt"}}
				<button type="submit" class="btn {{btnCancel.class}}" data-dismiss="modal" id="btnCancel">{{btnCancel.label}}</button>
			{{else}}
				<button type="button" class="btn {{btnCancel.class}}" data-dismiss="modal" id="btnCancel">{{btnCancel.label}}</button>
			{{/is}}
		{{/isNot}}
			<button type="button" class="btn btn-primary {{btnOK.class}}" data-dismiss="modal" id="btnOK">{{{btnOK.label}}}</button>
		</div>
	</div>
</div>