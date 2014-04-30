module.exports = function (grunt) {
	require('jit-grunt')(grunt);

	var path = require('path');

	var pack = grunt.file.readJSON('package.json');

	var libs = [];
	var aliasLibs = [];
	for (var key in pack.volo.dependencies) {
		libs.push(key);
		aliasLibs.push(pack.volo.baseDir + '/' + key + '.js:' + key);
	};

	grunt.initConfig({
		pkg: pack,
		banner: [
			'/**\n',
			' * Baltazzar <%= pkg.name %>\n',
			' * Versão: <%= pkg.version %>\n',
			' * <%= pkg.description %>\n',
			' * Autor: BaltazZar Team\n',
			' */\n\n'
		].join(''),
		livereloadPort: 4000,
		connect: {
			server: {
				options: {
					hostname: '*',
					port: 3000,
					livereload: '<%= livereloadPort %>',
					open: 'http://localhost:3000/test/index.html'
				}
			}
		},
		docco: {
			debug: {
				src: ['src/**/*.js', '!src/libs/**/*.js'],
				options: {
					output: 'docs/'
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
			files: ['src/**/*.js', '!src/libs/**/*.js']
		},
		watch: {
			files: {
				files: ['test/**/*'],

				options: {
					livereload: '<%= livereloadPort %>'

				}
			},
			dev: {
				files: ['src/**/*.js', '!src/libs/**/*.js'],
				tasks: ['browserify:dev']



			}
		},
		browserify: {
			dev: {
				src: ['src/<%= pkg.name %>.js'],
				dest: '<%= pkg.name %>.js',
				options: {
					alias: aliasLibs,
					bundleOptions: {
						standalone: 'baltazzar.<%= pkg.name %>'
					}
				}
			},
			dist: {
				src: ['src/<%= pkg.name %>.js'],
				dest: '<%= pkg.name %>.js',
				options: {
					external: libs,
					bundleOptions: {
						standalone: 'baltazzar.<%= pkg.name %>'
					}
				}
			}
		},
		uglify: {
			'<%= pkg.name %>.min.js': ['<%= pkg.name %>.js']
		}
	});

	grunt.registerTask('dev', ['browserify:dev', 'connect', 'watch']);
	grunt.registerTask('default', ['dev']);
	grunt.registerTask('build', ['docco', 'jshint', 'browserify:dist', 'uglify', 'banner']);
	grunt.registerTask('banner', function () {
		var banner = grunt.config.get('banner'),
			fileContent = grunt.file.read('multimodal.js'),
			minFileContent = grunt.file.read('multimodal.min.js');

		grunt.file.write('multimodal.js', banner + fileContent);
		grunt.file.write('multimodal.min.js', banner + minFileContent);
	});

};
