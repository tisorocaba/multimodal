module.exports = function(grunt) {
	grunt.initConfig({
		rootPath: grunt.option('folder'),
		serverPort: 3000,
		livereloadPort: 4000,
		connect: {
			server: {
				options: {
					port: '<%= serverPort %>',
					base: '<%= rootPath %>',
					hostname: 'localhost',
					livereload: '<%= livereloadPort %>'
				}
			}
		},
		handlebars: {
			compile: {
				src: ['<%= rootPath %>/app/templatesModal/**/*.tpl'],
				dest: '<%= rootPath %>/app/templatesModal/templates.js',
				options: {
					namespace: 'Handlebars.templates',
					processName: function(filePath) {
						var pieces = filePath.split("templates/");
						return pieces[pieces.length - 1];
					},
					processPartialName: function(filePath) {
						var pieces = filePath.split("templates/");
						return pieces[pieces.length - 1];
					}
				}
			}
		},
		watch: {
			options: {
				dateFormat: function(time) {
					grunt.log.writeln('Tarefa executada em ' + time + 'ms! Aguardando alterações...');
				},
				livereload: '<%= livereloadPort %>'
			},
			html: {
				files: '<%= rootPath %>/index.html'
			},
			handlebars: {
				files: '<%= rootPath %>/app/templatesModal/**/*.tpl',
				tasks: ['handlebars'],
				options: {
					atBegin: true
				}
			}
		}
	});

	// Task Server - Inicia um server sem suporte a livereload
	grunt.registerTask('server', ['connect:server:keepalive']);

	// Task Watch - Verifica alterações nos arquivos e executa as tasks informadas
	grunt.registerTask('watch', ['watch']);

	// Task Dev - Chama as tasks connect(server) e watch com suporte a livereload
	grunt.registerTask('dev', ['connect', 'watch']);

	// Abre a app no google chrome logo que o server inicia
	grunt.event.once('connect.server.listening', function(host, port) {
		var chrome = require('os').type() == 'Windows_NT' ? 'chrome' : 'google-chrome';
		require('open')('http://localhost:' + port, chrome);
	});

	// Carrega as tasks do grunt
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-handlebars');
	grunt.loadNpmTasks('grunt-contrib-connect');
}