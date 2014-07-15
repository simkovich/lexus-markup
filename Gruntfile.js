module.exports = function(grunt) {

    // Loading all grunt modules base on package.json
    require('load-grunt-tasks')(grunt);

    // Project configuration.
    grunt.initConfig({
        less: {
            main: {
                files: {
                    "css/main.css": "css/less/main.less"
                }
            }
        },

        watch: {
            main: {
                files: 'css/less/**/*.less',
                tasks: ['less'],
                options: {
                    nospawn: true
                }
            }
        },

        connect: {
            main: {
                options: {
                    port: 8002,
                    base: ['./','./'],
                    hostname: 'localhost',
                    open: {
                        target: 'http://localhost:8000/index.html'
                    }
                }
            }
        }
    });

    // Dev tasks
    grunt.registerTask('default', ['less:main']);
    grunt.registerTask('watch-css', ['default', 'watch:css']);

    grunt.registerTask('serve', 'running a dev server', function () {
        grunt.task.run('connect:main:keepalive');
    });

};
