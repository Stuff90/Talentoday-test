/*
contributors :
  - @simonbernard90
*/


define(['angular',  'app'], function (angular, app) {
	'use strict';

	return angular.module('app.edit', []).directive( 'edit', function() {
		return {
			restrict: 'E',
			scope: { value: '=' },
			template: function(elt){
				return '<span ng-click="edit()" ng-bind="value"></span>' +
						(elt[0].className.indexOf("multiline") > -1 ? '<textarea ng-model="value"></textarea>' : '<input ng-model="value"></input>');
			},
			link: function ( $scope, element ) {
				var inputElt 	= angular.element(element.children()[1]);

				element.addClass( 'ui-edit' );
				$scope.editing = false;

				$scope.edit = function () {
					$scope.editing = true;
					element.addClass( 'active' );
					inputElt[0].focus();
				};

				inputElt.prop( 'onblur', function() {
					$scope.editing = false;
					element.removeClass( 'active' );
				});
			}
		};
	});
});