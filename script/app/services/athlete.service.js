/*
contributors :
  - @simonbernard90
*/

'use strict';

define([ 'angular','app' ], function (angular, app) {

	return angular.module('app.AthleteService', []).factory( 'AthleteService', function() {

		var athletes = [{
				id:1,
				firstname:'usain',
				lastname:'bolt',
				birthdate:'2014-1-1',
				address:'Park avenue',
				phone:'000-0000-000',
				description:'Usain Bolt'
			},{
				id:2,
				firstname:'yohan',
				lastname:'blake',
				birthdate:'2014-1-1',
				address:'Park avenue',
				phone:'000-0000-000',
				description:'Yohan Blake here is some description of all I can say about Yohan. He is very tall and many content can be written about him.'
			},{
				id:3,
				firstname:'asafa',
				lastname:'powell',
				birthdate:'2014-1-1',
				address:'Park avenue',
				phone:'000-0000-000',
				description:'Asafa Powell'
			},{
				id:4,
				firstname:'nesta',
				lastname:'carter',
				birthdate:'2014-1-1',
				address:'Park avenue',
				phone:'000-0000-000',
				description:'Nesta Carter'
			},{
				id:5,
				firstname:'sherone',
				lastname:'simpson',
				birthdate:'2014-1-1',
				address:'Park avenue',
				phone:'000-0000-000',
				description:'Sherone Simpson'
			}
		];



		return {
			all:function(){
				return athletes;
			},
			get:function(id){
				if(!!id){
					for (var i = athletes.length - 1; i >= 0; i--) {
						if(athletes[i].id == id) return athletes[i];
					};
				} else {
					return this.athletes;
				}
			}
		};
	});
});