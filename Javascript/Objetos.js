//OBJETOS
var objeto = {nombre: Dominic, edad: 16} //guarda todo lo que hay en un objeto en la variable objeto.
objeto[1]; // Saca un valor especifico del objeto de la misma forma que se hace en un array

var miAuto = { //Genera un Objeto
    marca: "Toyota", //Propiedad del objeto
    modelo: "Corolla",
    annio: 2020,
    detallesdelAuto: function() { //Creamos una funcion dentro del atributo del objeto
        console.log("La marca del auto es: " + this.marca + " y el año del auto es: " + this.annio); //This hace referencia a un objeto.
    }
};

function auto(marca, modelo, annio){ //Funcion constructiva que trae valores del objeto
    this.marca = marca;  
    this.modelo = modelo;
    this.annio = annio;
}

var autoNuevo = new auto("Tesla", "Model 3", 2020); //Variable apartir del objeto.
autoNuevo //Llamar a la variable
miAuto.marca; //Llama al objeto y extrae lo que hay en marca.
miAuto.detallesdelAuto(); //Nos trae lo que haya dentro del valor del objeto.

//Generar un array de objetos
var articulos = [
    { nombre: "Never", costo: 3000},
    { nombre: "Gonna", costo: 200},
    { nombre: "Give", costo: 1000},
    { nombre: "You Up", costo: 400},
];

var articulosFiltrados = articulos.filter(function(articulos) {
    return articulos.costo <= 500   // trae todos los articulos que tengan un costo = o menos a 500  
});
var articulosMapeados = articulos.map(function(articulos){
    return articulo.nombre;      // Trae todos los nombres de los articulos
 });

var articulosBuscar = articulos.find(function(articulos){ 
    return articulo.nombre === "Gonna"; // Trae todos los articulos que tengan un nombre en concreto, si no lo encuentra no trae nada.
});

articulos.forEach(function(articulo){ //Recorre todo el array buscando los nombres dentro del array
    console.log(articulo.nombre);
});

articulosVerdaderos = articulos.some(function(articulo) {
    return articulo.costo <= 200;   // Regresa true si hay articulos con un costo menos a 200
});

//TRANSFORMAR OBJETO A ARRAY
const guaudarEnarray = Object.values(objeto); //Extrae lo que hay en el objeto llamado objeto y lo guarda en la variable
