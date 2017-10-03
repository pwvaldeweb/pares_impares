
// elije si vamos a datos oculta inicio//
document.getElementById("si").onclick = function ok() {
document.getElementById("inicio").style.display = "none";
document.getElementById("datos").style.display = "block";
}
//elige no va a no y oculta inicio//
document.getElementById("no").onclick = function nono() {
document.getElementById("noQuiero").style.display = "block";
document.getElementById("inicio").style.display = "none";
}
//vuelve a inicio//
document.getElementById("noQuiero").onclick = function empezar() {
document.getElementById("inicio").style.display = "block";
document.getElementById("noQuiero").style.display = "none";
}
document.getElementById("pares").onclick = function pares(){
var elige="pares";
    
}
document.getElementById("impares").onclick = function pares(){
var elige="impares";
    
}


//pulsas 0
document.getElementById("cero").onclick = function calcula0(){
document.getElementById("datos").style.display = "none";
document.getElementById("maquina").style.display ="block";
var apuesta = 0;
}
//pulsa 1
document.getElementById("uno").onclick = function calcula1(){
document.getElementById("datos").style.display = "none";
document.getElementById("maquina").style.display ="block";
var apuesta = 1;
}
// pulsa 2
document.getElementById("dos").onclick = function calcula2(){
document.getElementById("datos").style.display = "none";
document.getElementById("maquina").style.display ="block";
var apuesta = 2;
}
// pulsa3
document.getElementById("tres").onclick = function calcula3(){
document.getElementById("datos").style.display = "none";
document.getElementById("maquina").style.display ="block";
var apuesta = 3;
}
// pulsa 4
document.getElementById("cuatro").onclick = function calcula4(){
document.getElementById("datos").style.display = "none";
document.getElementById("maquina").style.display ="block";
var apuesta = 4;
}
//pulsa 5
document.getElementById("cinco").onclick = function calcula5(){
document.getElementById("datos").style.display = "none";
document.getElementById("maquina").style.display ="block";
var apuesta = 5;
}
//
//function maquinita(){
//document.getElementById("pensar").style.display ="none";  
//var valor = 
//Math.floor(Math.random()*5);
//}
//
document.getElementById("resultado").onclick = function resultado1(){
document.getElementById("resultado").style.display = "none";
document.getElementById("pensar").style.display ="none";
var valor = Math.floor(Math.random()*5);
//document.getElementById("numero").innerHTML = valor;
    
    if (valor===0){
document.getElementById("numero0").style.display="block";
document.getElementById("final").style.display="block";
   } else
    if (valor===1){
document.getElementById("numero1").style.display="block";
        document.getElementById("final").style.display="block";
    }else if (valor===2){
document.getElementById("numero2").style.display="block";
        document.getElementById("final").style.display="block";
    }else if (valor===3){
document.getElementById("numero3").style.display="block";
        document.getElementById("final").style.display="block";
    }else if (valor===4){
document.getElementById("numero4").style.display="block";
        document.getElementById("final").style.display="block";
    }
    else if (valor===5){
document.getElementById("numero5").style.display="block";
        document.getElementById("final").style.display="block";
    }

//window.setTimeout(maquinita(),5000);
}
 document.getElementById("final").onclick = function final1(){
            document.getElementById("resultado2").style.display = "block";
            document.getElementById("maquina").style.display ="none";
 }
 
var ganador= apuesta + valor;
var ganador=resultado%2;
if (ganador===0) {
    if (elige==="pares"){
    console.log("has ganado");
    }
    if (elige==="impares"){
        console.log("has perdido");
    }
}
if (ganador===1) {
    if (elige==="pares"){
    console.log("has perdido");
    }
    if (elige==="impares"){
        console.log("has ganado");
    }
}
if (ganador===0) {
    if (elige==="pares"){
    console.log("has ganado");
    }
    if (elige==="impares"){
        console.log("has perdido");
    }
}
if (ganador===1) {
    if (elige==="pares"){
    console.log("has perdido");
    }
    if (elige==="impares"){
        console.log("has ganado");
    }
}


