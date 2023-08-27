var estudiantes = ["Juancho", "Maria", "Lupita", "Ernesto"]; 

//Función que manda un mensaje a consola dependiendo el elemento pedido.
function saludarEstudiante(estudiante){
    console.log("Hola " + estudiante);
}

//For, inicializa i en 0, mientras que i sea menor a la longitud de valores de estudiantes, aumentando i en 1 cada vuelta.
for (let i = 0; i < estudiantes.length; i++) {
    saludarEstudiante(estudiantes[i]); //Llama a la función y el elemento dado es el array en el numero de la posicion donde se encuentra i.
}

//Segunda forma de hacer un for
for(var student of estudiantes){ //Student es como el singular de el grupo de valores en el array
    saludarEstudiante(student); // Al llamar la funcion pone el valor de estudiantes en la posicion de estudent.
}

//WHILE
while (estudiantes.length > 0) {
    var estudiante = estudiantes.shift();
    saludarEstudiante(estudiante);
}

//Bucle hasta que el usuario de la respuesta correcta de un prompt
let respuesta;

while (respuesta != "4"){
    respuesta = prompt("¿Cuanto es 2 + 2?");
}