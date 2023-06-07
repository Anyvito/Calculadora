const inputTeclado = document.querySelectorAll("[data-input]");
const inputSinal = document.querySelectorAll("[data-operacao]");
const inputApagar = document.querySelectorAll("[data-clear]");
const igual = document.getElementById("igual");
let display = document.getElementById('display');
let resultado = document.getElementById('resultado');
var operador = "";
let memoTemporaria = "";
const memoria = [];

inputTeclado.forEach( (elemento) => {
    elemento.addEventListener("click", (evento) => {
        chamadaTeclado(evento.target.textContent);
    })
})

inputSinal.forEach( (elemento) => {
    elemento.addEventListener("click", (evento) => {
        chamadaSinal(evento.target.textContent);
    })
})

inputApagar.forEach( (elemento) => {
    elemento.addEventListener("click", (evento) => {
        chamadaApagar(evento.target.textContent);
    })
})

function chamadaTeclado(numero) {
    display.value = display.value + numero;
    memoTemporaria = memoTemporaria+numero;
}

function chamadaSinal(operador) {
    if (memoTemporaria !== "") {
        call(operador);
    } else {
        memoTemporaria = resul;
        call(operador);
    }
}

function reset() {
    display.value = "";
    memoTemporaria = "";
    operador = "";
    memoria.splice(0);
}

function call(num) {
    if (operador === ""){
        operador = num
        display.value = display.value + operador;
        memoria.push(memoTemporaria)
        memoTemporaria = ""
    } if (operador === "%") {
        porcentagen = memoria[0] / 100
        resultado.innerHTML = porcentagen;
        reset()
    }
}

igual.addEventListener('click', (evento) => {
    memoria.push(memoTemporaria);
    if (operador !== "" && memoria[1] !== "") {
        if(operador === "-") {
            resul = memoria[0] - memoria[1];
        } else if(operador === "/") {
            resul = memoria[0] / memoria[1];
        } else if(operador === "*") {
            resul = memoria[0] * memoria[1];
        } else if(operador === "+" && memoria[0] !== "") {
            resul = parseFloat(memoria[0]) + parseFloat(memoria[1]);
        } else {
            resul = memoria[1];
        }
    } else {
        resul = memoria[0];
    }
    resultado.innerHTML = resul;
    reset()
});

igual.addEventListener('click', (evento) => {
    if (resultado.innerHTML === "NaN") {
        resultado.innerHTML = "Erro";
    }
});

function chamadaApagar (cl) {
    if (cl === "AC"){
        reset()
        resul = "";
        resultado.innerHTML = "";
    } if (cl === "C") {
        memoTemporaria = "";
        display.value = memoria + operador;
    }
}