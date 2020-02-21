function Developer(name, lastName, dni, title, hours){
	Employee.call(this, name, lastName, dni, title);
	this.hours = hours;
	/*
	contratados mediante una bolsa de horas, que reciben 
	un sueldo base y, a mayores por horas trabajadas, 
	sueldo por hora de 15 € y un pago por cada hora extra, 
	fuera de su bolsa de horas, a 30€.
	*/
	
	Developer.prototype.getSalary = function(){
		let extra = 0;	
		let baseHours = this.hours;
		if (this.hours > Developer.BASE_HOURS) {
			extra = this.hours - Developer.BASE_HOURS;
			baseHours = this.hours - extra;			
		}
				
		return this.salary + (baseHours * Developer.COMMISSION_PER_HOUR) + 
			(extra * Developer.COMMISSION_PER_EXTRA_HOUR);
	}
	
}

Developer.BASE_HOURS = 160;
Developer.COMMISSION_PER_HOUR = 15;
Developer.COMMISSION_PER_EXTRA_HOUR = 30;

Developer.prototype = Object.create(Employee.prototype);
Developer.prototype.constructor = Developer;