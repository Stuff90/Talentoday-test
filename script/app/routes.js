/*
contributors :
  - @simonbernard90
*/

'use strict';

define(['angular', 'app'], function(angular, app) {

	return app.config(['$routeProvider', function($routeProvider) {

		var modulesPath = 'script/app/modules/';


		$routeProvider.when('/', {
			templateUrl: modulesPath + 'home/home.template.html',
			controller: 'HomeController'
		});

		$routeProvider.otherwise({redirectTo: '/'});
	}]);

});
