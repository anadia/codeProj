//clas que utiliza métodos estáticos para implementar el patron de desarrollo
//de software llamado Singleton

class User{
	constructor(username, password) {
		this._username = username;
		this._password = password;
		User.incrementarContadorUsuarios();
	}
	
	get username(){
		return this._username;
	}
	
	get password(){
		return this._password;
	}
	
	mostrarDatos(){
		return this.username + " - " + this.password;
	}
	
	//el acceso a los métodos estáticos se hace a través de la clase
	//let usuario = User.crearUusario("Pepe", "123456");
	static crearUsuario(username, password){
		let user = null;
		if (this.cont < 1) {
			user = new User(username, password);
		}
		return user;
	}
	
	static incrementarContadorUsuarios(){
		this.cont++;
	}
	
	static verContadorUsuarios(){
		return this.cont;
	}
}

User.cont = 0; //variable estática, pq es usada a través de métodos estáticos