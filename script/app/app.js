/*
contributors :
  - @simonbernard90
*/

'use strict';

define([
	'angular',
	'angularRoute',

	'modules/home/home.controller',
	// 'directives/editInPlace',

	'services/athlete.service',

	], function (angular) {

		// Declare app level module which depends on filters, and services

		return angular.module('app', [
			'ngRoute',
			'app.home',
			// 'app.editInPlace',
		]);
});
