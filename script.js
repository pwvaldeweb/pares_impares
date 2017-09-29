
alert("hola");
document.getElementById("si").onclick = function () {
document.getElementById("inicio").style.display = "none";
document.getElementById("datos").style.display = "block";
}

document.getElementById("no").onclick = function () {
document.getElementById("noQuiero").style.display = "block";
document.getElementById("inicio").style.display = "none";
}
document.getElementById("noQuiero").onclick = function empezar() {
document.getElementById("inicio").style.display = "block";
document.getElementById("noQuiero").style.display = "none";
}

document.getElementById("cero").onclick = function calcula(){
document.getElementById("datos").style.display = "none";
document.getElementById("maquina").style.display ="block";
var apuesta=0;
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
document.getElementById("numero").innerHTML = valor;

//window.setTimeout(maquinita(),5000);
}
//
