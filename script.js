document.getElementById("si").onclick = function eligesi() {
document.getElementById("inicio").style.display = "none";
document.getElementById("datos").style.display = "block";

}
document.getElementById("no").onclick = function eligeno() {
document.getElementById("noQuiero").style.display = "block";
document.getElementById("inicio").style.display = "none";
}
document.getElementById("noQuiero").onclick = function empezar() {
document.getElementById("inicio").style.display = "block";
document.getElementById("noQuiero").style.display = "none";
}
document.getElementById("siguiente").onclick = function calcular() {
document.getElementById("resultado").style.display = "block";
document.getElementById("datos").style.display = "none";
}