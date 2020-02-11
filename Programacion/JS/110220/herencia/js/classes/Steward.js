/**
*	Steward es hija de Employee, hermana de Seller
*/
function Steward (name, salary, events){
	Employee.call(this, name, salary);
	this.events = events;
	
	Steward.prototype.getSalary = function(){
		return this.salary * this.events;
	}
	
	Steward.prototype.getNumberOfEvents = function(){
		return this.events;
	}
	
}

Steward.prototype = Object.create(Employee.prototype);
Steward.prototype.constructor = Steward;