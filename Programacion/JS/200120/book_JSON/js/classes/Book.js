function Book(jBook, title, author){
	
	if (jBook) {
		this.title = jBook.title;
		this.author = jBook.author;
	}
	else {
		this.title=title;
		this.author=author;
	}
	
	
	Book.prototype.setTitle = function (title){
		this.title= title;
		
	}

	Book.prototype.getTitle = function (){
		return this.title;
		
	}

	Book.prototype.setAuthor = function (author){
		this.author= author;
		
	}

	Book.prototype.getAuthor = function (){
		return this.author;
		
	}

	Book.prototype.toString = function(){
		return this.title + "_" + this.author;
	}

	Book.prototype.toJSONObject = function(){
		let jBook = {};
		
		jBook.title = this.title;
		jBook.author = this.author;
		
		return jBook;
	}




}
