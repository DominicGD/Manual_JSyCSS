//Referencia a los objetos del html
const resultado = document.querySelector('#lblResultado');
const btnNumero = document.querySelector('.btnNumero');
const btnSuma = document.querySelector('#sumar');
const btnIgual = document.querySelector('#igualar');

//variables necesarias en el codigo
let valorPulsado = '';
let valor1;
let valor2;
let total;
let numResultado;
//Llamadas a metodos de los botones de html
btnSuma.addEventListener('click', Suma);
btnIgual.addEventListener('click', Igual);

//Metodos, este metodo muestra los numeros precionados en la pantalla.
function ValorDelBotonPulsado(valorBtn) {
    valorPulsado = valorPulsado + String(valorBtn); //Acumulador de los numeros precionados.
    resultado.innerText = valorPulsado; //Muestra la variable en lblResultado.
}

function Suma() {
    valor1 = valorPulsado;
    console.log(valor1);
    resultado.innerText = valorPulsado + ' + '; //Muestra el sigo de + junto al valor
    valorPulsado = valorPulsado + ' + '; // Guarda este signo en la pagina
}

function Resta() { valor1 - valor2; }

function Multiplicacion() { valor1 * valor2; }

function Divicion() { valor1 / valor2; }

function Igual() {
    numResultado = Number(valorPulsado);
    resultado.innerText = numResultado + 'Hola';
}
