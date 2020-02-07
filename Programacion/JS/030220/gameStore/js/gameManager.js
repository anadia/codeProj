function createNewGame(){
    let name = document.getElementById("name").value;
    let platform = document.getElementById("platform").value;
    let genre = document.getElementById("genre").value;
    let priceRental = document.getElementById("priceRental").value;
    let priceSell = document.getElementById("priceSell").value;
 
   
    if (name && platform && genre && priceRental && priceSell) {
		
        priceRental = parseFloat(priceRental);
        priceSell = parseFloat(priceSell);
        genre = parseInt(genre);
        platform = parseInt(platform);
        
		
		let videogame = new VideoGame(name, platform, genre,priceRental, priceSell, VideoGame.STATE_AVAILABLE);
		myGameShop.addVideoGame(videogame);
		
		document.getElementById("name").style.borderColor = "unset";
		document.getElementById("platform").style.borderColor = "unset";
		document.getElementById("genre").style.borderColor = "unset";
        document.getElementById("priceRental").style.borderColor = "unset";
        document.getElementById("priceSell").style.borderColor = "unset";
		
		document.getElementById("gameShopForm").reset();
		
		paintVideoGames();
	}
    else {
		if (!name || name == ""){
			document.getElementById("name").style.borderColor = "red";
		}		
		
		if (!platform || platform == ""){
			document.getElementById("platform").style.borderColor = "red";
		}	
		
		if (!genre || genre == ""){
			document.getElementById("genre").style.borderColor = "red";
		}
		
		if (!priceRental || priceRental == ""){
			document.getElementById("priceRental").style.borderColor = "red";
        }		
        if (!priceSell || priceSell == ""){
			document.getElementById("priceSell").style.borderColor = "red";
		}	
    }
}

        function verEstado(videogame){
            let color = "red";
            
            if (videogame.state == VideoGame.STATE_AVAILABLE){
                color = "green";
            }
            else if(videogame.state == VideoGame.STATE_RENTED){
                color = "yellow";
            }
            return color;

        }

		function buttonState(videogame){
			let buttonChange = "";

			if (videogame.state == VideoGame.STATE_AVAILABLE || videogame.state == VideoGame.STATE_RENTED ){

				buttonChange  += "<input type='button' value='Sell' onclick='sellVideoGame(" + videogame.id + ");'/>";
		}

		
		 if (videogame.state == VideoGame.STATE_AVAILABLE ){
			buttonChange  += "<input type='button' value='Rent' onclick='rentVideoGame(" + videogame.id + ");'/>";
	}


		if ( videogame.state == VideoGame.STATE_RENTED){


			buttonChange  += "<input type='button' value='Available' onclick='setAvailable(" + videogame.id + ");'/>";

		}
		return  buttonChange;
	}

    function paintVideoGames(){
        resetVideoGameTable();	
        let videogames = myGameShop.getVideoGames();	
        for (let videogame of videogames){
            let datos = "<tr>" +
                 "<td> " + videogame.name + "</td>"
                + "<td>" + videogame.parseGenre() + "</td>"
                + "<td>" + videogame.parsePlatform() + "</td>"
                + "<td>" + videogame.priceRental + "</td>"
                + "<td>" + videogame.priceSell + "</td>"
                +"<td>"
                + "<span style= 'background-color:"+verEstado(videogame)+ "'> &nbsp; &nbsp; &nbsp; &nbsp;</span>"
                + "</td>"
                + "<td>"
                +  "<input type='button' value='Delete' onclick='deleteVideoGame(" + videogame.id + ");' />"+
                    buttonState(videogame)
                + "</td>"
                + "</tr>";	
            
            document.getElementById("videogames").innerHTML += datos;
        }	
    }

    function resetVideoGameTable(){
        document.getElementById("videogames").innerHTML = "";
    
        let cabecera = "<tr> \
            <th>Name</th> \
            <th>Platform</th> \
            <th>Genre</th> \
            <th>PriceRental</th> \
            <th>PriceSell</th> \
            <th>State</th>\
            <th>Actions</th> \
        </tr>";	
    
        
        document.getElementById("videogames").innerHTML = cabecera;
    }
    
    function deleteVideoGame(id){
        myGameShop.deleteVideoGame(id);
        paintVideoGames();
    }


    function rentVideoGame(id){
        myGameShop.rentVideoGame(id);
        paintVideoGames();
    }
    
    function sellVideoGame(id){
        myGameShop.sellVideoGame(id);
        paintVideoGames();
    }
    
    function setAvailable(id){
        myGameShop.setAvailable(id);
        paintVideoGames();
    }





