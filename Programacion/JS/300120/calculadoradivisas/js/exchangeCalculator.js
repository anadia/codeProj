//añade numeros a la pantalla inputScreen y los concatena
function addToScreen(data){   
        document.getElementById("inputScreen").value += data;  
} 
  
//inicializa la pantalla borrando inputScreen y estableciendo valores base para las outputScreen
function clearScreen(){ 
    document.getElementById("inputScreen").value = "";
    document.getElementById("outputScreenSymbol").innerHTML ="DIVISA" ;
    document.getElementById("outputScreen").innerHTML = "0.00000";
} 

//funcion de redondeo más correcta que tofixed en la que indicamos la cantidad de 5 decimales
function roundToFive(num) {    
    return +(Math.round(num + "e+5")  + "e-5");
}

//conversiones de Euro a moneda extranjera, dolar, libra y dolares canadienses y australianos
function convertEuroDollar() {
    if (document.getElementById("inputScreen").value  != "" ){ //solo permitimos la conversión si la pantalla no esta vacia
        document.getElementById("outputScreenSymbol").innerHTML = "US $"; //indicamos la moneda extranjera
        let valueCalc = parseFloat(document.getElementById("inputScreen").value); //almacenamos el valor en una variable para realizar el cálculo
        document.getElementById("inputScreen").value = valueCalc; //igualamos a la variable para evitar escritura repetida tras el simbolo de moneda
        document.getElementById("outputScreen").innerHTML = roundToFive(valueCalc*1.13755); //mostramos el calculo redondeado en la pantalla output
        document.getElementById("inputScreen").value  = document.getElementById("inputScreen").value + " €"; //concatenamos el simbolo sin afectar al cálculo
    }
}

function convertEuroLibra() {
    if (document.getElementById("inputScreen").value  != "" ){ 
        document.getElementById("outputScreenSymbol").innerHTML = "GPB £";
        let valueCalc = parseFloat(document.getElementById("inputScreen").value);
        document.getElementById("inputScreen").value = valueCalc;
        document.getElementById("outputScreen").innerHTML = roundToFive(valueCalc*0.88489);
        document.getElementById("inputScreen").value  = document.getElementById("inputScreen").value + " €";
    }  
}

function convertEuroCad() {
    if (document.getElementById("inputScreen").value  != "" ){ 
        document.getElementById("outputScreenSymbol").innerHTML = "CAD $";
        let valueCalc = parseFloat(document.getElementById("inputScreen").value);
        document.getElementById("inputScreen").value = valueCalc;
        document.getElementById("outputScreen").innerHTML = roundToFive(valueCalc*1.51186);
        document.getElementById("inputScreen").value  = document.getElementById("inputScreen").value + " €";
    }  
}

function convertEuroAus() {
    if (document.getElementById("inputScreen").value  != "" ){ 
        document.getElementById("outputScreenSymbol").innerHTML = "AUS $";
        let valueCalc = parseFloat(document.getElementById("inputScreen").value);
        document.getElementById("inputScreen").value = valueCalc;
        document.getElementById("outputScreen").innerHTML = roundToFive(valueCalc*1.58559);
        document.getElementById("inputScreen").value  = document.getElementById("inputScreen").value + " €";
    }  
}

//conversiones de moneda extranjera a Euro
function convertDollarEuro() {
    if (document.getElementById("inputScreen").value  != "" ){ 
        document.getElementById("outputScreenSymbol").innerHTML = " €";
        let valueCalc = parseFloat(document.getElementById("inputScreen").value);
        document.getElementById("inputScreen").value = valueCalc;
        document.getElementById("outputScreen").innerHTML = roundToFive(valueCalc*0.87968);
        document.getElementById("inputScreen").value  = document.getElementById("inputScreen").value + " $ US";
    }
}

function convertLibraEuro() {
    if (document.getElementById("inputScreen").value  != "" ){ 
        document.getElementById("outputScreenSymbol").innerHTML = "€";
        let valueCalc = parseFloat(document.getElementById("inputScreen").value);
        document.getElementById("inputScreen").value = valueCalc;
        document.getElementById("outputScreen").innerHTML = roundToFive(valueCalc*1.1324);
        document.getElementById("inputScreen").value  = document.getElementById("inputScreen").value + " £";
    }  
}

function convertCadEuro() {
    if (document.getElementById("inputScreen").value  != "" ){ 
        document.getElementById("outputScreenSymbol").innerHTML = "€";
        let valueCalc = parseFloat(document.getElementById("inputScreen").value);
        document.getElementById("inputScreen").value = valueCalc;
        document.getElementById("outputScreen").innerHTML = roundToFive(valueCalc*0.66299);
        document.getElementById("inputScreen").value  = document.getElementById("inputScreen").value + " $ CAD";
    }  
}

function convertAusEuro() {
    if (document.getElementById("inputScreen").value  != "" ){ 
        document.getElementById("outputScreenSymbol").innerHTML = "€";
        let valueCalc = parseFloat(document.getElementById("inputScreen").value);
        document.getElementById("inputScreen").value = valueCalc;
        document.getElementById("outputScreen").innerHTML = roundToFive(valueCalc*0.62993);
        document.getElementById("inputScreen").value  = document.getElementById("inputScreen").value + " $ AUS";
    }  
}

// establecemos dos clases alternativas una visible chgx1 y otra oculta chgx2 con display:none. Activamos el cambio de visibilidad con un boton
var  count = 0; //el contador permite alternar los estados
function changerO(){
   
    if (count == 0){ //recorremos las clases como un array cambiamos los atributos de las clases de mostrar a ocultar
        let elm1 = document.getElementsByClassName("chgx1");
        let elm2 = document.getElementsByClassName("chgx2");
        for (let i = 0; i < elm1.length; i++){
            elm1[i].setAttribute("class", "chgx1 hids");
            elm2[i].setAttribute("class", "chgx2 shows");
            count++; //aumentamos el contador para entrar a la siguiente condicion
        }
    }
    else{ //creamos la vista alternativa del select
        let elm1 = document.getElementsByClassName("chgx1");
        let elm2 = document.getElementsByClassName("chgx2");
        for (let i = 0; i < elm1.length; i++){
            elm1[i].setAttribute("class", "chgx1 shows");
            elm2[i].setAttribute("class", "chgx2 hids")
            count = 0; //reseteamos el contador
        }  
    }
// TODO si da isNAN indicar E de error
}