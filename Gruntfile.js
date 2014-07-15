module.exports = function(grunt) {

    // Loading all grunt modules base on package.json
    require('load-grunt-tasks')(grunt);

    // Project configuration.
    grunt.initConfig({
        connect: {
            main: {
                server: {
                    options: {
                        port: 8000,
                        hostname: '*',
                        target: 'http://localhost:8000', // target url to open
                        appName: 'open'
                    }
                }
            }
        }
    });

    // Dev tasks
    grunt.registerTask('default', ['clean-build', 'newer:copy:main', 'less:main']);
    grunt.registerTask('watch-css', ['default', 'watch:css']);

    grunt.registerTask('serve', 'running a dev server', function () {
        grunt.task.run('connect:main:keepalive');
    });

};
