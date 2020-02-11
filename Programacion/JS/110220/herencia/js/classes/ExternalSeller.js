/**
* Esta clase es hija de Seller y Nieta de Employee
* por lo que le pasa los datos de su constructor a Seller, y 
* por su parte de Seller se lo pasa a Employee
*/
function ExternalSeller(name, salary, salesNumber, commissionPerSale, company){
	//Llamamos al constructor de la clase Seller (que es su padre)
	Seller.call(this, name, salary, salesNumber, commissionPerSale);
	
	this.company = company;
	
	ExternalSeller.prototype.getCompany = function() {
		return this.company;
	}
	
	
}

// Creamos el objeto ExternalSeller.prototype que hereda desde Seller.prototype
ExternalSeller.prototype = Object.create(Seller.prototype);
// Establecer la propiedad "constructor" para referenciar a ExternalSeller (ella misma)
ExternalSeller.prototype.constructor = ExternalSeller;