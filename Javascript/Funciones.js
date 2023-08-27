//SCOPE GLOBAL
var global = 5; //Variable global para todo el codigo


function funcion(){ //Ejemplo de una funcion que devuelve un valor 3;
    return typeof 3; //Devuelve el tipo de valor que es 3 (Number)
    var local = 5; //Variable local que solo funciona en la funcion.
}
funcion(); //Llama a la funcion anterior

var miFuncion = function(a,b){ //Expresion de la función //Guarda una funcion en la variable y declara a y b dentro de la funcion.
    return a + b; //Retorna lo que haya en a y b declarado anteriormente.
}

miFuncion(10,15); //Llama a la funcion anterior y le da valor a a y b, esta devolveria 25;

function saludarEstudiante(estudiante){ //Funcion declarativa
    console.log('Hola ${estudiante}'); //la funcion manda un mensaje a consola saludando a quien hay en la variable "estudiante".
}
saludarEstudiante("luis"); //Llama a la funcion anterior