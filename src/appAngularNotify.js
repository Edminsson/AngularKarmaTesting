angular.module('appAngularNotify', ['ngRoute', 'cgNotify'])
.factory('peopleFactory', function($q){
	function getAllPeople() {
		return $q.when([
			{id:1, name: 'Mariano', country: 'Italy'},
			{id:2, name: 'Walter', country: 'Peru'},
			{id:3, name: 'Robban', country: 'Sweden'}
		]);
	}
	
	return {
		getAllPeople: getAllPeople
	}
})
.controller('mainController', function($scope, peopleFactory, notify) {
	$scope.version = '0.0.1';
	peopleFactory.getAllPeople().then(function(resultat) {
		$scope.people = resultat;
	});
	$scope.notify = function(medd) {
		notify(medd);
	}
});