describe('PeopleFactorySpecs', function(){
	var $rootScope;
	var folkfabrik;
	beforeEach(module('app'));
	beforeEach(inject(function(peopleFactory){
		folkfabrik = peopleFactory;
	}));
	
	beforeEach(function () {	
		inject(function (_$rootScope_) {
			$rootScope = _$rootScope_;
		});
	});
	
	it('GetAllPeople be called', function() {
		spyOn(folkfabrik, "getAllPeople");
		folkfabrik.getAllPeople();
		expect(folkfabrik.getAllPeople).toHaveBeenCalled();
		$rootScope.$apply();
	});
	it('Should receive array of people using Spy', function() {
		var handler = jasmine.createSpy('success');
		folkfabrik.getAllPeople().then(handler);
		$rootScope.$apply();
		expect(handler).toHaveBeenCalled();
	});
	it('Should receive array of people', function() {
		var folk;
		folkfabrik.getAllPeople().then(function(resultat) {
			folk = resultat;
		});
		$rootScope.$apply();

		expect(folk.length).toBe(3);
	})
	
});