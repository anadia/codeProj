/**
* Esta clase es hija de Employee, hermana de Steward 
* y tb padre de ExternalSeller
*/
function Seller(name, salary, salesNumber, commissionPerSale){
	Employee.call(this, name, salary);
	
	this.salesNumber = salesNumber;
	this.commissionPerSale = commissionPerSale;
	
	Seller.prototype.getSalesNumber = function(){
		return this.salesNumber;	
	}
	
	Seller.prototype.getSalary = function(){
		return this.salary + (this.salesNumber * this.commissionPerSale);
	}
	
}

// Creamos el objeto Seller.prototype que hereda desde Employee.prototype
Seller.prototype = Object.create(Employee.prototype);
// Establecer la propiedad "constructor" para referenciar a Seller
Seller.prototype.constructor = Seller;