module.exports = function (grunt) {
	require('jit-grunt')(grunt);

	var path = require('path');

	var package = grunt.file.readJSON('package.json');


	var libs = [];
	var aliasLibs = [];
	for (var k in package.volo.dependencies) {
		libs.push(k);
		aliasLibs.push(package.volo.baseDir + '/' + k + '.js:' + k);
	};



	grunt.initConfig({
		pkg: package,
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
				files: ['test/**/*', 'dist/**/*'],

				options: {
					livereload: '<%= livereloadPort %>'

				}
			},
			dist: {
				files: ['src/**/*.js', '!src/libs/**/*.js'],
				tasks: ['browserify:dev']



			}
		},
		browserify: {
			dev: {
				src: ['src/<%= pkg.name %>.js'],
				dest: 'dist/<%= pkg.name %>.js',
				options: {
					alias: aliasLibs,
					bundleOptions: {
						standalone: 'baltazzar.<%= pkg.name %>'
					}
				}
			},
			dist: {
				src: ['src/<%= pkg.name %>.js'],
				dest: 'dist/<%= pkg.name %>.js',
				options: {
					external: libs,
					bundleOptions: {
						standalone: 'baltazzar.<%= pkg.name %>'
					}
				}
			}
		},
		uglify: {
			'dist/<%= pkg.name %>.min.js': ['dist/<%= pkg.name %>.js']
		}
	});

	grunt.registerTask('dev', ['browserify:dev', 'connect', 'watch']);
	grunt.registerTask('default', ['dev']);
	grunt.registerTask('build', ['docco', 'jshint', 'browserify:dist', 'uglify', 'banner']);
	grunt.registerTask('banner', function () {
		var banner = grunt.config.get('banner'),
			fileContent = grunt.file.read('dist/multimodal.js'),
			minFileContent = grunt.file.read('dist/multimodal.min.js');

		grunt.file.write('dist/multimodal.js', banner + fileContent);
		grunt.file.write('dist/multimodal.min.js', banner + minFileContent);
	});

};
