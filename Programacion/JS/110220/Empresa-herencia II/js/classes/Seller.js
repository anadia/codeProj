function Seller(name, lastName, dni, title, numberOfSales){
	Employee.call(this, name, lastName, dni, title);
	
	this.salary = 1500;
	this.numberOfSales = numberOfSales;
	

	Seller.prototype.getSalary = function(){
		return this.salary + (this.numberOfSales * Seller.COMMISSION_PER_SALE);
	}
	
}

Seller.COMMISSION_PER_SALE = 70;

Seller.prototype = Object.create(Employee.prototype);
Seller.prototype.constructor = Seller;