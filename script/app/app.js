'use strict';

define([
	'angular',
	'angularRoute',
	'modules/home/home.controller',
	'services/athlete.service',
	], function (angular) {

		// Declare app level module which depends on filters, and services
		
		return angular.module('app', [
			'ngRoute',
			// 'app.filters',
			// 'app.services',
			// 'app.directives',
			'app.home',
			// 'app.controllers'
		]);
});
