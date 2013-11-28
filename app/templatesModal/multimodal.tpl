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
{{!-- {{#cif type param="prompt"}}
		<div class="form-group">
			{{message}}<br>
			<input type="text" class="form-control input-sm" id="txtPrompt" placeholder="{{placeholder}}">
		</div>
{{else}}
			{{{message}}}
{{/cif}} --}}
		{{!-- </div> --}}
		{{!-- <div class="modal-footer {{class}}"> --}}
{{!-- {{#cunless type param="alert"}}
			<button type="{{#cif type param="prompt"}}
submit{{else}}button{{/cif}}" class="btn {{btnCancel.class}}" data-dismiss="modal" id="btnCancel">{{btnCancel.label}}</button>
{{/cunless}} --}}
        	{{!-- <button type="button" class="btn btn-primary {{btnOK.class}}" data-dismiss="modal" id="btnOK">{{{btnOK.label}}}</button> --}}
        {{!-- </div>
	</div>
</div> --}}