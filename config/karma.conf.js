module.exports = function (config) {
  config.set({

    basePath: '../',

    frameworks: ['jasmine'],

    files: [
      // Polyfills.
      'node_modules/es6-shim/es6-shim.js',

      'node_modules/reflect-metadata/Reflect.js',

      // System.js for module loading
      'node_modules/systemjs/dist/system-polyfills.js',
      'node_modules/systemjs/dist/system.src.js',

      // Zone.js dependencies
      'node_modules/zone.js/dist/zone.js',
      'node_modules/zone.js/dist/proxy.js',
      'node_modules/zone.js/dist/sync-test.js',
      'node_modules/zone.js/dist/jasmine-patch.js',
      'node_modules/zone.js/dist/async-test.js',
      'node_modules/zone.js/dist/fake-async-test.js',

      // RxJs.
      {
        pattern: 'node_modules/rxjs/**/*.js',
        included: false,
        watched: false
      }, {
        pattern: 'node_modules/rxjs/**/*.js.map',
        included: false,
        watched: false
      },


      {
        pattern: 'config/karma-test-shim.js',
        included: true,
        watched: true
      },

      // paths loaded via module imports
      // Angular itself
      {
        pattern: 'node_modules/@angular/**/*.js',
        included: false,
        watched: true
      }, {
        pattern: 'node_modules/@angular/**/*.js.map',
        included: false,
        watched: true
      },

      // Our built application code
      {
        pattern: 'src/**/*.js',
        included: false,
        watched: true
      },

      // paths loaded via Angular's component compiler
      // (these paths need to be rewritten, see proxies section)
      {
        pattern: 'src/**/*.html',
        included: false,
        watched: true
      }, {
        pattern: 'src/**/*.css',
        included: false,
        watched: true
      },

      // paths to support debugging with source maps in dev tools
      {
        pattern: 'src/**/*.ts',
        included: false,
        watched: false
      }, {
        pattern: 'src/**/*.js.map',
        included: false,
        watched: false
      }
    ],

    // proxied base paths
    proxies: {
      // required for component assests fetched by Angular's compiler
      "/src/app/": "/base/src/app/"
    },

    reporters: ['progress', 'dots', 'coverage'],

    // Source files that you wanna generate coverage for.
    // Do not include tests or libraries (these files will be instrumented by Istanbul)
    preprocessors: {
      'src/**/!(*spec).js': ['coverage']
    },

    coverageReporter: {
      reporters: [{
        type: 'json',
        subdir: '../',
        file: 'coverage.json'
      }]
    },

    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Chrome'],
    singleRun: false
  })
}