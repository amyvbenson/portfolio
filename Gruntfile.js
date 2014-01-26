'use strict';

module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        // grunt-contrib-imagemin - compresses images
        // https://github.com/gruntjs/grunt-contrib-imagemin
        imagemin: {
            dynamic: {
                files: [{
                    expand: true,
                    cwd: 'images/images-src',
                    src: ['*.{png,jpg,gif}'],
                    dest: 'images/'
                }]
            }
        },

        // grunt-contrib-sass - complies sass
        // https://github.com/gruntjs/grunt-contrib-sass
        sass: {
            dist: {
                options: {
                    style: 'compressed'
                },
                files: {
                    'css/styles.css': 'css/styles.scss'
                }
            }
        },

        // grunt-contrib-uglify - minifies js
        // https://github.com/gruntjs/grunt-contrib-uglify
        uglify: {
            dist: {
                options: {
                    compress: false,
                    banner:  '/*! <%= pkg.name %> - v<%= pkg.version %> - ' + '<%= grunt.template.today("yyyy-mm-dd h:MM:ss") %> */',
                    mangle: false
                },
            
                files: {
                    'js/scripts.min.js': [ 
                        'js/libs/jquery-1.11.0.min.js',
                        'js/scripts/_portfolio.js'    
                    ],
          
                }
            }
        },

  
        // grunt-contrib-watch - watches for changes. Includes live reload
        // https://github.com/gruntjs/grunt-contrib-watch
        watch: {
            
            css: {
                files: ['css/styles.css'],
                options: {
                    livereload: true
                }
            },
            sass: {
                files: ['css/sass/*.scss',
                'css/sass/components/*.scss',
                'css/sass/elements/*.scss',
                'css/sass/mixins/*.scss'],
                tasks: ['sass'],
                options: {
                    spawn: false
                }
            },
            images: {
                files: ['images/images-src/*.*'],
                tasks: ['imagemin'],
                options: {
                    spawn: false
                }
            },
            scripts: {
                files: ['js/scripts/_*.js'],
                tasks: ['uglify'],
                    options: {
                    spawn: false
                }
            }
        }

    });

    require('load-grunt-tasks')(grunt);

    grunt.registerTask('default', ['imagemin', 'sass', 'uglify']);
    grunt.registerTask('dev', ['watch']);


};