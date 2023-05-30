const inputTeclado = document.querySelectorAll("[data-input]");
const inputSinal = document.querySelectorAll("[data-operacao]");
const inputApagar = document.querySelectorAll("[data-clear]");
const igual = document.getElementById("igual");
let display = document.getElementById('display');
let resultado = document.getElementById('resultado');
var sinal = "";
let conta = "";
const memoria = [];

inputTeclado.forEach( (elemento) => {
    elemento.addEventListener("click", (evento) => {
        valorInput(evento.target.textContent);
    })
})

inputSinal.forEach( (elemento) => {
    elemento.addEventListener("click", (evento) => {
        teset(evento.target.textContent);
    })
})

inputApagar.forEach( (elemento) => {
    elemento.addEventListener("click", (evento) => {
        apagar(evento.target.textContent);
    })
})

function valorInput(numero) {
    display.value = display.value + numero;
    conta = conta+numero;
}

function teset(operador) {
    if (sinal === ""){
        sinal = operador
        display.value = display.value + operador;
        memoria.push(conta)
        conta = ""

    } if (sinal === "%") {
        porcentagen = memoria[0] / 100
        resultado.innerHTML = porcentagen;
        display.value = "";
        conta = "";
        sinal = "";
        memoria.splice(0);
    }
}

igual.addEventListener('click', (evento) => {
    memoria.push(conta);

    if(sinal === "-") {
        teste = memoria[0] - memoria[1];
    } if(sinal === "/") {
        teste = memoria[0] / memoria[1];
    } if(sinal === "*") {
        teste = memoria[0] * memoria[1];
    } if(sinal === "+") {
        teste = parseInt(memoria[0]) + parseInt(memoria[1]);
    } if (sinal === "") {
        teste = memoria
    }

    resultado.innerHTML = teste;
    display.value = "";
    conta = "";
    sinal = "";
    memoria.splice(0);
});

function apagar (cl) {
    if (cl === "AC"){
        resultado.innerHTML = "0";
        display.value = "";
        conta = "";
        sinal = "";
        memoria.splice(0);
    } if (cl === "C") {
        conta = "";
        display.value = memoria + sinal;
        console.log (memoria)
    }
}