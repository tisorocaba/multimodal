require.config({
	paths: {
		'backbone': 'libs/backbone/backbone',
		'bootstrap': 'libs/bootstrap/dist/js/bootstrap',
		'handlebars': 'libs/handlebars/handlebars',
		'jquery': 'libs/jquery/jquery',
		'marionette': 'libs/backbone.marionette/lib/backbone.marionette',
		'templatesModal': '../templatesModal/templates',
		'underscore': 'libs/underscore/underscore',
	},
	shim: {
		'underscore': {
			exports: '_'
		},
		'backbone': {
			deps: ['jquery', 'underscore'],
			exports: 'Backbone'
		},
		'marionette': {
			deps: ['jquery', 'underscore', 'backbone'],
			exports: 'Marionette'
		},
		'handlebars': {
			exports: 'Handlebars'
		},
		'bootstrap': {
			deps: ['jquery']
		},
		'templatesModal': {
			deps: ['handlebars']
		}
	}
});

require(['backbone', 'marionette', 'handlebars', 'multimodal', 'bootstrap', 'handlebars_helpers'], function (Backbone, Marionette, Handlebars, Multimodal) {
	var App = new Marionette.Application();

	App.addRegions({
		main: '#main'
	});

	Multimodal = Multimodal(App);

	Marionette.Renderer.render = function (template, data) {
		console.log('Template compile ' + template)
		var source;
		var path = 'app/templates/' + template
		source = $.ajax({
			url: path,
			cache: false,
			async: false,
		}).responseText;
		var tpl = eval('Handlebars.compile(source)');
		return tpl(data);
	};

	var IndexView = Marionette.ItemView.extend({
		template: 'index.tpl',
		className: 'pms-box',

		onRender: function () {},

		events: {
			'click #alertString': 'alertString',
			'click #alertObject': 'alertObject',
			'click #alertCallback': 'alertCallback',
			'click #confirmString': 'confirmString',
			'click #confirmObject': 'confirmObject',
			'click #confirmCallback': 'confirmCallback',
			'click #promptString': 'promptString',
			'click #promptObject': 'promptObject',
			'click #promptCallback': 'promptCallback',
		},

		callbackGeral: function (res) {
			$('#alertAlert').html('Retorno do callback:' + res);
		},

		alertString: function () {
			Multimodal.alert('Alert com string')
		},

		alertObject: function () {
			Multimodal.alert({
				message: 'Alert com objeto ',
				title: 'teste'
			})
		},

		alertCallback: function () {
			Multimodal.alert('multimodal', this.callbackGeral)
		},

		confirmString: function () {
			Multimodal.confirm('confirm com string')
		},

		confirmObject: function () {
			Multimodal.confirm({
				message: 'confirm com objeto ',
				title: 'teste'
			})
		},

		confirmCallback: function () {
			Multimodal.confirm('multimodal', this.callbackGeral)
		},

		promptString: function () {
			Multimodal.prompt('prompt com string')
		},

		promptObject: function () {
			Multimodal.prompt({
				message: 'prompt com objeto ',
				title: 'teste'
			})
		},

		promptCallback: function () {
			Multimodal.prompt('multimodal', this.callbackGeral)
		},
	});

	var AppRouter = Backbone.Router.extend({
		routes: {
			'': 'index'
		},

		index: function () {
			App.main.show(new IndexView());
		}
	});

	appRouter = new AppRouter();
	Backbone.history.start();
});