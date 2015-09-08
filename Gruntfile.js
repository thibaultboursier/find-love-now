module.exports = function(grunt) {

    grunt.initConfig({
        watch: {
            options: {
                livereload: true
            },
            express: {
                files:  ['server.js'],
                tasks:  ['express:dev'],
                options: {
                    spawn: false
                }
            }
        },
        express: {
            dev: {
                options: {
                    script: 'server.js'
                }
            }
        },
        wiredep: {
            task: {
                src: [
                    'public/index.html'
                ]
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-express-server');
    grunt.loadNpmTasks('grunt-wiredep');

    grunt.registerTask('default', ['wiredep', 'express:dev', 'watch']);
};