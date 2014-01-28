module.exports = function (grunt) {
	var path = require('path');

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		livereloadPort: 4000,
		connect: {
			server: {
				options: {
					port: 3000,
					livereload: '<%= livereloadPort %>',
					open: true
				}
			}
		},
		handlebars: {
			compile: {
				src: '**/*.tpl',
				dest: 'app/js/templates.js',
				options: {
					namespace: 'Handlebars.templates',
					processName: function (filePath) {
						filePath = filePath.split('templates/');
						return path.basename(filePath[0]) + '/' + filePath[1];
					},
					processPartialName: function (filePath) {
						filePath = filePath.split('templates/');
						return path.basename(filePath[0]) + '/' + filePath[1];
					}
				}
			}
		},
		watch: {
			files: {
				files: ['**/*.{html,htm,css,js,png,jpg,gif}', '!**/libs/**'],
				options: {
					livereload: '<%= livereloadPort %>',
					interval: 700
				}
			},
			templates: {
				files: '**/*.tpl',
				tasks: ['handlebars'],
				options: {
					atBegin: true
				}
			}
		},
		jshint: {
			options: {
				'-W030': true,
				'-W061': true,
				'-W116': true,
				'-W041': true,
				'-W069': true
			},
			files: ['app/js/**/*.js', '!**/libs/**/*.js', '!**/components/**/*.js', '!app/js/templates.js']
		},
		requirejs: {
			build: {
				options: {
					mainConfigFile: 'app/js/main.js',
					appDir: './',
					baseUrl: 'app/js',
					dir: 'dist/<%= pkg.version %>',
					optimizeCss: 'standard',
					findNestedDependencies: true,
					removeCombined: true,
					skipDirOptimize: true,
					modules: [{
						name: 'main',
						exclude: ['config']
					}]
				}
			}
		},
		clean: {
			dist: {
				options: {
					force: true
				},
				src: [
					'dist/<%= pkg.version %>/Gruntfile.js',
					'dist/<%= pkg.version %>/package.json',
					'dist/<%= pkg.version %>/build.txt',
					'dist/<%= pkg.version %>/.ftppass',
					'dist/<%= pkg.version %>/app/js/components',
					'dist/<%= pkg.version %>/app/templates'
				]
			}
		},
		replace: {
			dist: {
				options: {
					patterns: [{
						match: 'versao',
						replacement: '<%= pkg.version %>'
					}]
				},
				files: [{
					src: 'dist/<%= pkg.version %>/index.html',
					dest: 'dist/<%= pkg.version %>/index.html'
				}, {
					src: 'dist/<%= pkg.version %>/app/js/main.js',
					dest: 'dist/<%= pkg.version %>/app/js/main.js'
				}]
			}
		},
		'ftp-deploy': {
			'pms-teweb02': {
				auth: {
					host: 'pms-teweb02',
					port: 21,
					authKey: 'admin'
				},
				src: 'dist/<%= pkg.version %>',
				dest: '/<%= pkg.name %>-grunt',
				exclusions: ['dist/<%= pkg.version %>/.ftppass', 'dist/<%= pkg.version %>/node_modules']
			}
		}
	});

	grunt.registerTask('compile', ['handlebars']);
	grunt.registerTask('server', ['connect:server:keepalive']);
	grunt.registerTask('dev', ['connect', 'watch']);
	grunt.registerTask('build', ['jshint', 'requirejs', 'replace:dist', 'clean:dist']);
	grunt.registerTask('deploy', ['ftp-deploy:pms-teweb02']);

	grunt.loadNpmTasks('grunt-contrib-connect');
	grunt.loadNpmTasks('grunt-contrib-handlebars');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-requirejs');
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-replace');
	grunt.loadNpmTasks('grunt-ftp-deploy');
};