function Top(name){
	this.name = name;
	this.occurrences = 1;
	
	Top.prototype.getName = function(){
		return this.name;
	}
	
	Top.prototype.getOccurrences = function(){
		return this.occurrences;
	}
	
	Top.prototype.addOcurrence = function(){
		this.occurrences++;
	}
}