function HR(name, lastName, dni, title){
	Employee.call(this, name, lastName, dni, title);
	
	
	
}

HR.prototype = Object.create(Employee.prototype);
HR.prototype.constructor = HR;