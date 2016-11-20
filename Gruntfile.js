module.exports = function (grunt) {
  grunt.initConfig({
    browserify: {
      dist: {
        options: {
          transform: [['babelify', {presets: ['es2015', 'react']}]]
        },
        files: {
          "./dist/app1.js": ["./src/app1.js"],
          "./dist/app2.js": ["./src/app2.js"]
        }
      }
    },
    watch: {
      scripts: {
        files: ["./src/*.js"],
        tasks: ["browserify"]
      }
    }
  });

  grunt.loadNpmTasks("grunt-browserify");
  grunt.loadNpmTasks("grunt-contrib-watch");

  grunt.registerTask("default", ["watch"]);
  grunt.registerTask("build", ["browserify"]);
};
