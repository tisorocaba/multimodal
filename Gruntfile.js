module.exports = function (grunt) {
	require('jit-grunt')(grunt);

	var path = require('path');

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		banner: [
			'/**\n',
			' * Baltazzar <%= pkg.name %>\n',
			' * Versão: <%= pkg.version %>\n',
			' * <%= pkg.description %>\n',
			' * Autor: BaltazZar Team\n',
			' */\n\n'
		].join(''),
		docco: {
			debug: {
				src: ['src/**/*.js'],
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
			files: ['src/**/*.js', '!src/templates.js']
		},
		watch: {
			files: {
				files: ['**/*.{html,htm,css,js,png,jpg,gif}'],
				options: {
					interval: 700
				}
			},
			dist: {
				files: ['src/**/*.js'],
				tasks: ['jshint', 'browserify'],
				options: {
					atBegin: true
				}
			}
		},
		browserify: {
			dist: {
				src: ['src/<%= pkg.name %>.js'],
				dest: 'dist/<%= pkg.name %>.js',
				options: {
					bundleOptions: {
						standalone: 'baltazzar.<%= pkg.name %>'
					}
				}
			}
		}
	});

	grunt.registerTask('build', ['docco', 'jshint', 'browserify']);
	grunt.registerTask('dev', ['watch']);
	grunt.registerTask('default', ['build']);
};