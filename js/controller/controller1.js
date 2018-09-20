define(['app'], function (app) {
  return app.controller('myCtrl', ['$scope', function ($scope) {
    $scope.firstName = "John";
    $scope.lastName = "Doe";
  }])
});
