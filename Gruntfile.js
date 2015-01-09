
var packageJson = require('./package.json');

module.exports = function (grunt) {
    
    // Project configuration.
    grunt.initConfig({
        
        exec: {
            plovr: 'java -jar third-party/plovr-39d05e7.jar build scripts/plovr-config.js',
            plovrdebug: 'java -jar third-party/plovr-39d05e7.jar serve scripts/plovr-config.js'/*,
            deps: '"plovr/closure-library/closure/bin/build/depswriter.py" --root_with_prefix="plovr/pbx ../../../pbx" > plovr/pbx/deps.js'*/
        }

        
        /*cssmin: {
            options: {
                compatibility: 'ie8',
                keepSpecialComments: '*',
                noAdvanced: true
            },
            core: {
                files: {
                    'public/stylesheets/<%= bootstrapFilename %>.min.css': 'public/stylesheets/<%= bootstrapFilename %>.css'
                }
            }
        },*/
        

    });
    
    require('load-grunt-tasks')(grunt, { scope: 'devDependencies' });
                                

    // Default task(s).
    grunt.registerTask('default', ['exec:plovr']);

};
