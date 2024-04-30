const button = document.getElementById("dmb")
const up = document.getElementById("ncDos")
const down = document.getElementById("ncTres")
const button2 = document.getElementById("dmb2")
var mode = "light"




button.addEventListener("click", function() {
    up.classList.toggle("dark-modeDos");
    down.classList.toggle("dark-modeTres");
})


