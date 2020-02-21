function Employee (name, lastName, dni, title){
	this.name = name;
	this.lastName = lastName;
	this.dni = dni;
	this.title = "";
	if (title) {
		this.title = title;
	}
	this.salary = Employee.BASE_SALARY;
	
	
	Employee.prototype.getSalary = function(){
		return this.salary;
	}
}

Employee.BASE_SALARY = 1200;