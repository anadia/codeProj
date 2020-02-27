class User{
	
	
	constructor(name, password){
		this._name = name;
		this._password = password;
	}
	
	get name(){
		return this.name;
	}
	set name(_name){			
		this._name = name;
	}
	
	get password(){
		return this.password;
	}
	set password(password){			
		this.password = password;
	}
		verUsers(){
		return this.name + " - " + this.password;
	}

	
	
	 contarUsers(){
		verContadorUsuarios();
	}
	
	
	
	static verContadorUsuarios(){
		return this.cont;
	}
}
User.cont = 0; //variable estática, pq es u
