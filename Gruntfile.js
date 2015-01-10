module.exports = function(grunt) {
  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);
  grunt.initConfig({
    //bower: grunt.file.readJSON('./.bowerrc'),
    pkg: grunt.file.readJSON('./package.json'),
    uglify: {
      dev:{
          options: {
            banner: '/*! <%= pkg.name %> lib - v<%= pkg.version %> -' +
                    '<%= grunt.template.today("yyyy-mm-dd HH:mm") %> */',
            separator: ';'
          },
          dest: '<%= pkg.dev %>/assets/scripts/core.min.js',
          src: [
            'bower_components/angular/angular.js',
            'bower_components/angular-animate/angular-animate.js',
            'bower_components/angular-mocks/angular-mocks.js',
            'bower_components/angular-route/angular-route.js',
            'bower_components/angular-ui-router/release/angular-ui-router.js',
            'bower_components/angular-bootstrap/ui-bootstrap.js',
            'bower_components/angular-bootstrap/ui-bootstrap-tpls.js',
            'bower_components/angularfire/dist/angularfire.js',
            'bower_components/firebase/firebase.js',
            'bower_components/firebase-simple-login/firebase-simple-login.js',
            'bower_components/angular-loading-bar/src/loading-bar.js'
            ]
      },
      prod:{}
    },
    copy: {
      dev: {
        files: [
          {expand: true, flatten: true, src: ['bower_components/bootstrap/dist/fonts/*'], dest: '<%= pkg.dev %>/assets/fonts/', filter: 'isFile'}
        ]
      },
      prod: {}
    },
    less: {
      dev: {
        options: {
          paths: ["<%= pkg.dev %>/assets/styles/app"]
        },
        files: {
          "<%= pkg.dev %>/assets/styles/core.css": "bower_components/bootstrap/less/bootstrap.less",
          "<%= pkg.dev %>/assets/styles/custom.css": "<%= pkg.dev %>/assets/styles/app/style.less"
        }
      },
      live: {
        options: {
          paths: ["<%= pkg.dev %>/assets/styles/"]
        },
        files: {
          "<%= pkg.dev %>/assets/styles/custom.css": "<%= pkg.dev %>/assets/styles/app/style.less"
        }
      }
    },
    concat: {
      css: {
        options: {
        },
        src: [
          '<%= pkg.dev %>/assets/styles/core.css',
          'bower_components/angular-loading-bar/src/loading-bar.css'
        ],
        dest: '<%= pkg.dev %>/assets/styles/core.css'
      }
    },
    cssmin: {
      dev: {
        options: {
          expand: true,
          banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - ' +
          '<%= grunt.template.today("yyyy-mm-dd") %> */'
        },
        files: {
          '<%= pkg.dev %>/assets/styles/core.min.css': ['<%= pkg.dev %>/assets/styles/core.css'],
          '<%= pkg.dev %>/assets/styles/custom.min.css': ['<%= pkg.dev %>/assets/styles/custom.css']
        }
      },
      live:{
        options: {
          expand: true,
          banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - ' +
          '<%= grunt.template.today("yyyy-mm-dd") %> */'
        },
        files: {
          '<%= pkg.dev %>/styles/custom.min.css': ['<%= pkg.dev %>/styles/custom.css']
        }
      }
    },
    watch: {
      less: {
        files: [
          '<%= pkg.dev %>/styles/app/*.less'
        ],
        tasks: ['less:live', 'cssmin:live']
      }
    }
  });

  grunt.registerTask('default', ['dev']);
  grunt.registerTask('dev', ['uglify:dev', 'copy:dev', 'less:dev', 'concat:css', 'cssmin:dev']);
  grunt.registerTask('live', ['watch']);
};