'use strict';

define([], function () {
	// return angular.module('AthleteService', []).factory('AthleteFactory', function() {
	return function() {

		var athlete = {};

		athlete.all = [{
				id:1,
				firstname:'Usain',
				lastname:'Bolt',
				birthdate:'2014-1-1',
				address:'Park avenue',
				phone:'000-0000-000',
				description:'Usain Bolt'
			},{
				id:2,
				firstname:'Yohan',
				lastname:'Blake',
				birthdate:'2014-1-1',
				address:'Park avenue',
				phone:'000-0000-000',
				description:'Yohan Blake'
			},{
				id:3,
				firstname:'Asafa',
				lastname:'Powell',
				birthdate:'2014-1-1',
				address:'Park avenue',
				phone:'000-0000-000',
				description:'Asafa Powell'
			},{
				id:4,
				firstname:'Nesta',
				lastname:'Carter',
				birthdate:'2014-1-1',
				address:'Park avenue',
				phone:'000-0000-000',
				description:'Nesta Carter'
			}
		];

		athlete.get = function(id){
			if(!!id){
				for (var i = athlete.all.length - 1; i >= 0; i--) {
					if(athlete.all[i].id == id) return athlete.all[i];
				};
			} else {
				return this.athletes;
			}

		}

		return athlete;
	};

});