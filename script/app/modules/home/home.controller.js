/*
contributors :
  - @simonbernard90
*/


define([

	'angular',
	'services/athlete.service',
	'./directives/edit.directive'

	], function (angular, i) {
	'use strict';

	console.info('Home Controller');

	return angular.module('app.home', [
			'app.edit',
			'app.AthleteService'
		])
		.controller('HomeController', ['$scope','AthleteService', function ($scope, AthleteService) {

			$scope.items = AthleteService.all();

			$scope.open = function(item){
				$scope.selectedClass = $scope.items;
    			$scope.activeClass 	 = item.id;
			};
		}]);
});