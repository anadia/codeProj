function addToScreen(data){
	document.getElementById("screen").value += data;
}

function deleteScreen(){
	document.getElementById("screen").value = "";
}

function exchange(){
	let origen = document.getElementById("origen").value;
	let destino = document.getElementById("destino").value;
	let amount = document.getElementById("screen").value;
	
	if (checkAmount(amount)){	
		document.getElementById("screen").value = 
			RateExchange.exchangeRate(origen, destino, amount);
			
		document.getElementById("rate").value = destino;
	}
	else {
		document.getElementById("screen").value = "E";
	}
}

function checkAmount(amount){
	return amount.split(".").length == 2 || amount.split(".").length == 1;
}