function Employee(name, salary){
	this.name = name;
	this.salary = salary;
	
	Employee.prototype.getName = function(){
		return this.name;
	}
	
	Employee.prototype.setName = function(name){
		this.name = name;	
	}
	
	Employee.prototype.getSalary = function(){
		return this.salary;
	}
}