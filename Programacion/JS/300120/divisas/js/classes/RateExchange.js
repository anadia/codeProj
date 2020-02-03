function RateExchange(){	
}

RateExchange.exchangeRate = function (origen, destino, cantidad) {
	let rate = eval("RateExchange." + origen + "_" + destino);
	if (origen == destino){
		rate = 1;
	}	
	
	let res = cantidad * rate;
	
	if (isNaN(rate)) {
		rate = eval("RateExchange." + destino + "_" + origen);
		res = cantidad / rate;
	}

	return roundToFive(res);
}

RateExchange.EUR_USS = 1.13755;
RateExchange.EUR_GBP = 0.88489;
RateExchange.EUR_CADS = 1.51186;
RateExchange.EUR_AUSS = 1.58559;
RateExchange.USS_GBP = 0.77615;
RateExchange.USS_CADS = 1.32632;
RateExchange.USS_AUSS = 1.3951;
RateExchange.GBP_CADS = 1.70693;
RateExchange.GBP_AUSS = 1.79544;
RateExchange.CADS_AUSS = 1.05144;
