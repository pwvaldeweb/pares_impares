alert("hola mundo");
var jugador ="pares";
var maquina="nones";
var jugadajugador=7;
var jugadamaquina= Math.floor(Math.random()*11);
console.log (jugadamaquina);
var resultado=jugadajugador+jugadamaquina;
console.log(resultado);
var resultado=resultado%2;
console.log(resultado);
if (resultado===0) {
    if (jugador==="pares"){
    console.log("has ganado");
    }
    if (jugador==="nones"){
        console.log("has perdido");
    }
}
if (resultado===1) {
    if (jugador==="pares"){
    console.log("has perdido");
    }
    if (jugador==="nones"){
        console.log("has ganado");
    }
}
if (resultado===0) {
    if (jugador==="pares"){
    console.log("has ganado");
    }
    if (jugador==="nones"){
        console.log("has perdido");
    }
}
if (resultado===1) {
    if (jugador==="pares"){
    console.log("has perdido");
    }
    if (jugador==="nones"){
        console.log("has ganado");
    }
}


