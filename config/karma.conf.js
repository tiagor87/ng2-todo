module.exports = function(config) {
    config.set({

        basePath: '../',

        frameworks: ['systemjs', 'jasmine'],

        files: [
            // paths loaded via module imports
            {pattern: 'src/**/*.spec.js', watched: true},
        ],

        port: 9876,

        logLevel: config.LOG_INFO,

        colors: true,

        autoWatch: true,

        browsers: ['Chrome'],

        // Karma plugins loaded
        plugins: [
            'karma-systemjs',
            'karma-jasmine',
            'karma-coverage',
            'karma-chrome-launcher'
        ],

        systemjs: {
          // Path to your SystemJS configuration file 
          configFile: 'systemjs.config.js'
        },

        // Coverage reporter generates the coverage
        reporters: ['progress', 'dots', 'coverage'],

        // Source files that you wanna generate coverage for.
        // Do not include tests or libraries (these files will be instrumented by Istanbul)
        preprocessors: {
            'src/**/!(*spec).js': ['coverage']
        },

        coverageReporter: {
            reporters:[
                {type: 'json', subdir: '../', file: 'coverage.json'}
            ]
        },

        singleRun: false
    })
};