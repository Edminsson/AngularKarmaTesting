describe('PeopleFactorySpecs', function(){
	
	var folkfabrik;
	beforeEach(module('app'));
	beforeEach(inject(function(peopleFactory){
		folkfabrik = peopleFactory;
	}))
	
	it('Should receive array of people', function() {
		people = folkfabrik.people;
		expect(people.length).toBe(3);
	})
});