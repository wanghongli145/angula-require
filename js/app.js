define(['angular'], function (angular) {
  var app = angular.module('myApp', ['ngRoute', 'ngSanitize', 'ajaxLoading']); //引入需要以来的模块
  return app;
});
