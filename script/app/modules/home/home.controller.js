/*
contributors :
  - @simonbernard90
*/

'use strict';

define(['angular', 'services/athlete.service'], function (angular, i) {
	console.info('Home Controller');

	return angular.module('app.home', [])
		.controller('HomeController', ['$scope', function ($scope) {
			// $scope.scopedAppVersion = version;
			$scope.items = i().all;
			
			$scope.open = function(item){
				console.log(item);
				$scope.selectedClass = $scope.items;
    			$scope.activeClass 	 = item.id;
			};


			// $scope.AthleteProvider = AthleteProvider
		}]);

});