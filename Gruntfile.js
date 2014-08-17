/*jshint node:true*/

module.exports = function (grunt) {

    'use strict';

    // load all grunt tasks
    require('load-grunt-tasks')(grunt);

    grunt.initConfig({

        watch: {
            less: {
                files: ['style/less/**'],
                tasks: ['less:dev'],
                options: {
                    spawn: false,
                    interrupt: true
                }
            }
        },


        less: {
            dev: {
                options: {
                    sourceMap: true,
                    sourceMapFilename: 'style/main.min.css.map'
                },
                files: {
                    'style/main.css': 'style/Less/main.less'
                }
            },
            prod: {
                options: {
                    compress: true,
                    report: true,
                    sourceMap: false
                },
                files: {
                    'style/main.css': 'style/Less/main.less'
                }
            }
        }

    });

    // Tasks.
    grunt.registerTask('default', ['jshint', 'build']);

    grunt.registerTask('prod', [
        'less:prod'
    ]);

};