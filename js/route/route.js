/**
 * 路由
 */
define(['app'], function (app) {
  return app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
      .when('/a', {
        templateUrl: 'views/a.html',
        controller: 'myCtrl'
      })
      .otherwise({
        redirectTo: '/a'
      });
  }])
});
