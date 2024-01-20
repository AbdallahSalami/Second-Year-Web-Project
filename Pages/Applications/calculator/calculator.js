var number1="";  // input
var number2= 0;
var answer = 0;
var dotted = false;
var operator = "";
var buttonOne = document.getElementById('one');
buttonOne.addEventListener('click', function() {
    number1 += "1";
    document.getElementById('displayScreen').innerHTML= number1;
    

});
var buttonTwo = document.getElementById('two');
buttonTwo.addEventListener('click', function() {
    number1 += "2";
    document.getElementById('displayScreen').innerHTML= number1;
    
});
var buttonThree = document.getElementById('three');
buttonThree.addEventListener('click', function() {
    number1 += "3";
    document.getElementById('displayScreen').innerHTML= number1
});
var buttonFour = document.getElementById('four');
buttonFour.addEventListener('click', function() {
    number1 += "4";
    document.getElementById('displayScreen').innerHTML= number1
});
var buttonFive = document.getElementById('five');
buttonFive.addEventListener('click', function() {
    number1 += "5";
    document.getElementById('displayScreen').innerHTML= number1
});
var buttonSix = document.getElementById('six');
buttonSix.addEventListener('click', function() {
    number1 += "6";
    document.getElementById('displayScreen').innerHTML= number1
});
var buttonSeven = document.getElementById('seven');
buttonSeven.addEventListener('click', function() {
    number1 += "7";
    document.getElementById('displayScreen').innerHTML= number1
});
var buttonEight = document.getElementById('eight');
buttonEight.addEventListener('click', function() {
    number1 += "8";
    document.getElementById('displayScreen').innerHTML= number1
});
var buttonNine = document.getElementById('nine');
buttonNine.addEventListener('click', function() {
    number1 += "9";
    document.getElementById('displayScreen').innerHTML= number1
});
var buttonZero = document.getElementById('zero');
buttonZero.addEventListener('click', function() {
    number1 += "0";
    document.getElementById('displayScreen').innerHTML= number1
});
var button2Zeros = document.getElementById('2zeros');
button2Zeros.addEventListener('click', function() {
    number1 += "00";
    document.getElementById('displayScreen').innerHTML= number1
});


var buttonDot = document.getElementById('dot');
buttonDot.addEventListener('click', function() {
    if ( dotted === false ){
        if (number1 === "")
        {
            number1 += "0.";
            dotted = true;
        }
        else
        {
            number1 += ".";
            dotted =true;
        }  
        document.getElementById('displayScreen').innerHTML= number1;
    }
});
function times(){
    if (operator === ""){
        document.getElementById("displayScreen").innerHTML = number1;
        number2 = number1;
        number1 = "";
        dotted = false;
        operator = "*";
    }else if (operator === "=" ){
        if (number1 === ""){
        document.getElementById("displayScreen").innerHTML = answer;
        number2 = answer ;
        answer = 0;
        number1 = "";
        dotted = false;
        operator = "*";
        }else if (number1 !== ""){
            document.getElementById("displayScreen").innerHTML = number1;
            number2 = number1;
            answer = 0;
            number1 = ""
            dotted = false;
            operator = "*";
        }
    }
    else if (operator === "*" ) {
        if (number1 !== "" ){
            number1 = parseFloat(number1);
            number2 *= number1;            
            number1 = "";
            dotted = false;
            operator = "*";
        }
    }else if (operator === "+") {
        if (number1 !== "" ){
            number1 = parseFloat(number1);
            number2 += number1;
            number1 = "";
            dotted = false;
            operator = "*";
        }
    }else if (operator === "-") {
        if (number1 !== ""){
            number1 = parseFloat(number1);
            number2 -= number1;
            number1 = "";
            dotted = false;
            operator = "*";
        }
    }else if (operator === "/") {
        if (number1 !== ""){
            number1 = parseFloat(number1);
            number2 /= number1;
            number1 = "";
            dotted = false;
            operator = "*";
        }
    }

}
function minus(){
    if (operator === ""){
        document.getElementById("displayScreen").innerHTML = number1;
        number2 = number1;
        number1 = "";
        dotted = false;
        operator = "-";
    }else if (operator === "=" ){
        if (number1 === ""){
        document.getElementById("displayScreen").innerHTML = answer;
        number2 = answer ;
        answer = 0;
        number1 = "";
        dotted = false;
        operator = "-";
        }else if (number1 !== ""){
            document.getElementById("displayScreen").innerHTML = number1;
            number2 = number1;
            answer = 0;
            number1 = ""
            dotted = false;
            operator = "-";
        }
    }
    else if (operator === "*" ) {
        if (number1 !== ""){
            number1 = parseFloat(number1);
            number2 *= number1;            
            number1 = "";
            dotted = false;
            operator = "-";
        }
    }else if (operator === "+") {
        if (number1 !== ""){
            number1 = parseFloat(number1);
            number2 += number1;
            number1 = "";
            dotted = false;
            operator = "-";
        }
    }else if (operator === "-") {
        if (number1 !== ""){
            number1 = parseFloat(number1);
            number2 -= number1;
            number1 = "";
            dotted = false;
            operator = "-";
        }
    }else if (operator === "/") {
        if (number1 !== ""){
            number1 = parseFloat(number1);
            number2 /= number1;
            number1 = "";
            dotted = false;
            operator = "-";
        }
    }
}
function plus(){
    if (operator === ""){
        document.getElementById("displayScreen").innerHTML = number1;
        number2 = number1;
        number1 = "";
        dotted = false;
        operator = "+";
    }else if (operator === "=" ){
        if (number1 === ""){
        document.getElementById("displayScreen").innerHTML = answer;
        number2 = answer ;
        answer = 0;
        number1 = "";
        dotted = false;
        operator = "+";
        }else if (number1 !== ""){
            document.getElementById("displayScreen").innerHTML = number1;
            number2 = number1;
            answer = 0;
            number1 = ""
            dotted = false;
            operator = "+";
        }
    }
    else if (operator === "*" ) {
        if (number1 !== ""){
            number1 = parseFloat(number1);
            number2 *= number1;            
            number1 = "";
            dotted = false;
            operator = "+";
        }
    }else if (operator === "+") {
        if (number1 !== ""){
            number1 = parseFloat(number1);
            number2 = parseFloat(number2) + parseFloat(number1);
            number1 = "";
            dotted = false;
            operator = "+";
        }
    }else if (operator === "-") {
        if (number1 !== ""){
            number1 = parseFloat(number1);
            number2 -= number1;
            number1 = "";
            dotted = false;
            operator = "+";
        }
    }else if (operator === "/") {
        if (number1 !== ""){
            number1 = parseFloat(number1);
            number2 /= number1;
            number1 = "";
            dotted = false;
            operator = "+";
        }
    }
}
function divide(){
    if (operator === ""){
        document.getElementById("displayScreen").innerHTML = number1;
        number2 = number1;
        number1 = "";
        dotted = false;
        operator = "/";
    }else if (operator === "=" ){
        if (number1 === ""){
        document.getElementById("displayScreen").innerHTML = answer;
        number2 = answer ;
        answer = 0;
        number1 = "";
        dotted = false;
        operator = "/";
        }else if (number1 !== ""){
            document.getElementById("displayScreen").innerHTML = number1;
            number2 = number1;
            answer = 0;
            number1 = ""
            dotted = false;
            operator = "/";
        }
    }
    else if (operator === "*" ) {
        if (number1 !== "" ){
            number1 = parseFloat(number1);
            number2 *= number1;            
            number1 = "";
            dotted = false;
            operator = "/";
        }
    }else if (operator === "+") {
        if (number1 !== ""){
            number1 = parseFloat(number1);
            number2 += number1;
            number1 = "";
            dotted = false;
            operator = "/";
        }
    }else if (operator === "-") {
        if (number1 !== ""){
            number1 = parseFloat(number1);
            number2 -= number1;
            number1 = "";
            dotted = false;
            operator = "/";
        }
    }else if (operator === "/") {
        if (number1 !== ""){
            number1 = parseFloat(number1);
            number2 /= number1;
            number1 = "";
            dotted = false;
            operator = "/";
        }
    }
}
function equal(){
    if (operator === ""){
        number2 = number1;
        document.getElementById("displayScreen").innerHTML = number2;
        number1 = "";
        dotted = false;
        operator = "=";
    }else if (operator === "="){
        number2 = answer;
        document.getElementById("displayScreen").innerHTML = number2;
        
        number1 = "";
        dotted = false;
        operator = "=";
        if (number1 !== ""){
            number2 = number1;
            answer = 0;
            number1 ="";
            dotted = false;
            operator = "=";

        }
    }
    else if (operator === "*" ) {
        if (number1 !== ""){
            number1 = parseFloat(number1);
            number2 *= number1;      
            number1 = "";
            dotted = false;
            operator = "=";
        }
    }else if (operator === "+") {
        if (number1 !== ""){
            number1 = parseFloat(number1);
            number2 = parseFloat(number2) + parseFloat(number1);
            number1 = "";
            dotted = false;
            operator = "=";
        }
    }else if (operator === "-") {
        if (number1 !== ""){
            number1 = parseFloat(number1);
            number2 -= number1;
            number1 = "";
            dotted = false;
            operator = "=";
        }
    }else if (operator === "/") {
        if (number1 !== ""){
            number1 = parseFloat(number1);
            number2 /= number1;
            number1 = "";
            dotted = false;
            operator = "=";
        }
    }
    answer = number2;
    document.getElementById("displayScreen").innerHTML = answer;
    operator = "=";
    number1 = "";
    dotted = false;
    number2 = 0;
        
}
var buttonTimes = document.getElementById("times");
buttonTimes.addEventListener('click', times);
var buttonMinus = document.getElementById("minus");
buttonMinus.addEventListener('click', minus);
var buttonPlus = document.getElementById("plus");
buttonPlus.addEventListener('click', plus);
var buttonDivide = document.getElementById("divide");
buttonDivide.addEventListener('click', divide);
var buttonEqual = document.getElementById("equal");
buttonEqual.addEventListener('click', equal);
var buttonClear = document.getElementById("clear");
buttonClear.addEventListener('click' , function(){
    number1 = "" ;
    number2 = 0 ;
    operator = "" ;
    answer = 0 ;
    dotted = false ;
    document.getElementById("displayScreen").innerHTML = "";

});
var buttonDel = document.getElementById("backspace");
buttonDel.addEventListener('click',function(){
    number1 = number1.slice(0,-1);
    document.getElementById("displayScreen").innerHTML = number1;
    console.log(number1);
});

document.addEventListener('keydown', function(event) {
    if ( isNaN(event.key) === false && event.key !== " "){   
        number1 += event.key;
        document.getElementById('displayScreen').innerHTML= number1
    } else if (event.key === "." && dotted === false && number1 === ""){
        number1 += "0.";
        dotted = true;
        document.getElementById('displayScreen').innerHTML= number1;
    }else if (event.key === "." && dotted === false && number1 !== ""){
        number1 += ".";
        dotted = true;
        document.getElementById('displayScreen').innerHTML= number1;
    }else if (event.key === "+"){
        plus();
    }else if (event.key === "-"){
        minus();
    }else if (event.key === "*"){
        times();
    }else if (event.key === "/"){
        divide();
    }else if (event.key === "="){
        equal();
    }else if (event.key === "Enter"){
        equal();
    }else if (event.key === "Backspace"){
        
        number1 = number1.slice(0,-1);
        document.getElementById("displayScreen").innerHTML = number1;
        console.log(number1)
    }else if(event.key === "c"){
        number1 = "" ;
        number2 = 0 ;
        operator = "" ;
        answer = 0 ;
        dotted = false ;
        document.getElementById("displayScreen").innerHTML = "";

    }
    console.log(number1)
    console.log(number2)
    console.log(operator)
    console.log(dotted)
    console.log(answer)

});

