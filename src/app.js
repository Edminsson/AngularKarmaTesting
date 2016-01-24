angular.module('app', [])
.factory('peopleFactory', function(){
	return {
		people: [
			{name: 'Mariano', country: 'Italy'},
			{name: 'Walter', country: 'Peru'},
			{name: 'Robban', country: 'Sweden'}
		]
	}
})
.controller('mainController', function($scope, peopleFactory) {
	$scope.version = '0.0.1';
	$scope.people = peopleFactory.people;
});