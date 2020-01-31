function division(a,b){
    let res = a/b;
    if (a > 5 ){
        console.log("a es mayor de 5. La divison es :" + res);
    }
    else if (a < 5){
        console.log("a es menor de 5. La divison es : ");
    }
    else {
        console.log("a es 5. La divison es : " + res);
    }

}

exports.division = division;