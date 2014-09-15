/**
 * Author: Dan Hayes
 * Company: Chariot Solutions
 * Email: dhayes@chariotsolutions.com
 * Date: 7/29/14
 * Time: 9:08 AM
 */
'use strict';

module.exports = function(grunt) {

    grunt.loadNpmTasks("grunt-contrib-less");

    grunt.initConfig({
        pkg: grunt.file.readJSON("package.json"),
        less: {
            build: {
                files: {
                    "src/main/resources/static/css/app.css": "src/main/resources/less/app.less",
                    "src/main/resources/static/css/app-bootstrap.css": "src/main/resources/less/app-bootstrap.less",
                    "src/main/resources/static/css/sticky-footer-navbar.css": "src/main/resources/less/sticky-footer-navbar.less"
                }
            }
        }
    });

    grunt.registerTask('build', ['less']);
    grunt.registerTask('default', ['build']);

};