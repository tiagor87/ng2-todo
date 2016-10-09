"use strict";

Error.stackTraceLimit = Infinity;

jasmine.DEFAULT_TIMEOUT_INTERVAL = 1000;

__karma__.loaded = function () {};

var allSpecFiles = Object.keys(window.__karma__.files)
                         .filter(isSpecFile)
                         .filter(isTestFileBuilt);

System.config({
  baseURL: '/base'
});

System.config({
  map: {
    '@angular': 'node_modules/@angular',
    'rxjs': 'node_modules/rxjs',
    'app': 'src'
  },
  packages: {
    'app': {
      main: 'main.js',
      defaultExtension: 'js'
    },
    '@angular/core': {
      main: 'index.js',
      defaultExtension: 'js'
    },
    '@angular/compiler': {
      main: 'index.js',
      defaultExtension: 'js'
    },
    '@angular/common': {
      main: 'index.js',
      defaultExtension: 'js'
    },
    '@angular/forms': {
      main: 'index.js',
      defaultExtension: 'js'
    },
    '@angular/platform-browser': {
      main: 'index.js',
      defaultExtension: 'js'
    },
    '@angular/platform-browser-dynamic': {
      main: 'index.js',
      defaultExtension: 'js'
    },
    'rxjs': {
      defaultExtension: 'js'
    }
  }
});

Promise.all([
    System.import('@angular/core/testing'),
    System.import('@angular/platform-browser-dynamic/testing')
  ])
  .then((providers) => {
    var testing = providers[0];
    var testingBrowser = providers[1];

    testing.setBaseTestProviders(testingBrowser.TEST_BROWSER_DYNAMIC_PLATFORM_PROVIDERS,
                                 testingBrowser.TEST_BROWSER_DYNAMIC_APPLICATION_PROVIDERS);

    return;
  })
  .then(() => {
    return Promise.all(allSpecFiles.map((moduleName) => {
      return System.import(moduleName);
    }));
  })
  .then(__karma__.start)
  .catch(__karma__.error);

function isJsFile(path) {
  return path.slice(-3) == '.js';
}

function isSpecFile(path) {
  return path.slice(-8) == '_test.js';
}

function isTestFileBuilt(path) {
  var builtPath = '/base/tests/';
  return isJsFile(path) && (path.substr(0, builtPath.length) == builtPath);
}