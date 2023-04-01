const calculator = document.querySelector(".calculator");
const botones = document.querySelector(".botones")
const h1 = document.querySelector(".h1")
const abrir = document.querySelector(".button1")
const cerrar = document.querySelector(".button2")

calculator.style.transition = "display 1s"
calculator.style.display = "none"
cerrar.style.display = "none"

abrir.addEventListener("click",()=>{
    calculator.style.display = "flex";
    h1.style.display = "none";
    abrir.style.display = "none";
    cerrar.style.display = "flex";
})

cerrar.addEventListener("click",()=>{
    calculator.style.display = "none";
    h1.style.display = "flex";
    abrir.style.display = "";
    cerrar.style.display = "none";
})
