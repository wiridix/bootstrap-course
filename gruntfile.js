module.exports = function(grunt){
    const sass = require('node-sass');
    require('load-grunt-tasks')(grunt);
    //Loads plugins
    require('jit-grunt')(grunt);

    grunt.initConfig({
        sass:{
            options:{
                implementation: sass,
                sourceMap: false,
                style: 'expanded'
            },
            dist:{
                files:[{
                    expand: true,
                    cwd: 'css',
                    src: ['*.scss'],
                    dest: 'css',
                    ext: '.css'
                }]
            }
        },
        cssmin:{
            target:{
                files:[{
                    expand: true,
                    cwd: 'css',
                    src: ['*.css', '!*.min.css'],
                    dest: 'dist/css',
                    ext: '.min.css'
                }]
            }
        },

        copy: {
            main: {
              expand: true,
              cwd: './',
              src: ['index.html'],
              dest: 'dist/',
            },

            main2: {
                expand: true,
                cwd: 'page',
                src: ['*.html'],
                dest: 'dist/page',
              },
        },

        clean: {
            dist: {
              src: ["dist/"]
            }
        },
        imagin:{
            dynamic: {
                files: [{
                    expand: true,
                    cwd: './',
                    src: ['img/*.{png,jpg,gif,jpeg}'],
                    dest: 'dist/'
                }]
            }
        },

        concat:{
            generated:{
                options:{
                    separator: ';',
                },
                files:[{
                    dest: 'dist/js/',
                    src:['js/*.js']
                }]
            }
        },

        uglify:{
            generated:{
                files:[{
                    dest: 'dist/js',
                    src:['dist/js/*.js']
                }]
            }
        },
    });
    //registrer task
    grunt.registerTask('css', ['sass']);
    grunt.registerTask('cssmin', ['cssmin']);
    grunt.registerTask('limp', ['clean']);
    grunt.registerTask('copiar', ['copy']);

    grunt.registerTask('default', ['css', 'cssmin','limp']);
};