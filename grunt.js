module.exports = function (grunt) {

  grunt.initConfig({
    watch: {
      files: ['grunt.js'],
      tasks: 'wbb:html'
    },

    sass: {
      compile: {
        files: {
          'src/css/main.css': 'src/sass/*.scss'
        }
      }
    },

    copy: {

      minified_css: {
        files: {
          "builds/html/": "src/css/main.min.css"
        }
      }
    },

    concat: {
      markdown: {
        src: 'src/chapters/*.md',
        dest: 'tmp/index.md'
      },

      css: {
        src: 'src/css/*.css',
        dest: 'src/css/main.min.css'
      }
    },

    mincss: {
      main: {
        files: {
          'src/css/main.min.css': 'src/css/main.min.css'
        }
      }
    },

    shell: {
      make_html: {
        command: 'make html'
      }
    },

    clean: {
      tmp: 'tmp',
      css: 'src/css/main.min.css'
    }
  });

  grunt.loadNpmTasks('grunt-contrib');
  grunt.loadNpmTasks('grunt-shell');
  grunt.loadNpmTasks('grunt-sass');

  grunt.registerTask('wbb:html', 'concat:markdown sass:compile concat:css mincss:main copy:minified_css shell:make_html clean:tmp clean:css');
};
