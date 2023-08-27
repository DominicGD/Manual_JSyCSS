var numero = 5;
var eleccion2 = 2;

if (true) { // sintaxis de un if 
    console.log("HOLAAAAAAA");
}
else if(numero === 5){ // Sintaxis de ejemplo else if
    console.log("Numero si es igual a 5");
}
else{ // sintaxis else
    console.log("Soy falso");
}

function switchVerdadero(eleccion) { //Se crea la funcion con nuestro parametro de eleccion
switch (eleccion) {         //Creacion de switch dependiendo eleccion
    case 1:           //Este caso se ejecuta cuando eleccion sea igual a 1.
        console.log("Soy un 1"); 
        break;        // Indica cuando termina el caso, sin este ejecutaria todos los casos de una.
    case 2:
        console.log("Soy un 2");
        break;

    default: //En default se ejecutara en caso de que ningun case haya sido verdad
        console.log("Este numero no esta disponible");
        break;
}
}

//EJEMPLO SWITCH DEPENDIENDO UN VALOR STRING
let valueString = "Pedro";
switch (valueString) {
    case "Pedro":
        console.log("Hola soy Pedro");
        break;
    default:
        console.log("No tengo un nombre");
        break;
}

//condition ? true : false;    Condición que evalua si es falso o no y muestra los resultados en una linea
eleccion2 === 2 ? console.log("La condicion es verdadera") : console.log("La condicion puesta es falsa"); 


typeof arraySecreto[0] === "string"; //Saca de que tipo de valor es lo que hay en ArraySecreto lugar 0 y comprara si el resultado es string
