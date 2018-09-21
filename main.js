require.config({
  urlArgs: "==version==",
  waitSeconds: 0,
  baseUrl: 'js/',
  paths: {
    'jquery': 'lib/jquery/dist/jquery',
    'angular': 'lib/bower-angularjs/angular.min',
    'angular-route': 'lib/bower-angularjs/angular-route.min',
    'app': 'app',
    'controller1': 'controller/controller1',
    'route': 'route/route'
  },
  shim: {
    'angular': {
      exports: 'angular'
    },
    'angular-route': {
      deps: ['angular'],
      exports: 'angular-route'
    }
  },
  deps: ['app']
});
require(['jquery', 'angular', 'angular-route', 'app', 'controller1', 'route'], function ($, angular) {
  console.log($);
  console.log(angular);
  $(function () {
    console.log($);
    console.log(angular);
    angular.bootstrap(document, ["myApp"]); //初始化整app
    // angular.bootstrap(document.getElementById('app-root'), ['myApp'], {
    //   debugInfoEnabled: true
    // });
  })

});