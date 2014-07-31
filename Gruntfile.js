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
            css: {
                files: 'css/less/**/*.less',
                tasks: ['less'],
                options: {
                    nospawn: true
                }
            }
        },
        browserSync: {
            dev: {
                bsFiles: {
                    src: [
                        "css/*.css",
                        "*.html"
                    ]
                },
                options: {
                    server: {
                        baseDir: "./"
                    },
                    watchTask: true // < VERY important
                }
            }
        }
    });

    // Dev tasks
    grunt.registerTask('default', ['less']);
    grunt.registerTask('sync', ['browserSync','watch:css']);

};
