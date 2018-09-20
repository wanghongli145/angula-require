require.config({
  urlArgs: "==version==",
  waitSeconds: 0,
  baseUrl: 'js/',
  paths: {
    'jquery': 'lib/jquery/dist/jquery',
    'angular': 'lib/bower-angularjs/angular.min',
    'app': 'app',
    'controller1': 'controller/controller1'
  },
  shim: {
    'angular': {
      exports: 'angular',
      deps: ['jquery']
    }
  },
  deps: ['app']
});
require(['jquery', 'angular', 'app', 'controller1'], function ($, angular) {
  console.log($);
  console.log(angular);
  $(function () {
    // angular.bootstrap(document, ["myApp"]); //初始化整app
    angular.bootstrap(document.getElementById('app-root'), ['myApp'], {
      debugInfoEnabled: true
    });
  })

});