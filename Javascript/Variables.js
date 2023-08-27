var numero = 50; //Creacion de una variable numerica
var texto = "soy un texto"; //Creacion de una variable tipo texto 
var verdadera = true;
{nombre: Diego} //Variable de tipo objeto

//Declaraciones de variables
var hola1; //Declaracion con var (Deja cambiar sus valores pero es un tipo de variable mas vieja)
let hola2; //Declaracion con let (Deja cambiar del valor despues de declararla)
const hola3 = "Hola3"; // Declaracion con const (El valor de la variable va a ser siempre el mismo)

//Ejemplo inicializar 
hola2 = "Holaas";

//ARRAYS
var amigos = ["Carlos", "Mario", "Luis"]; //creacion de variable array guardando valores de tipo texto.
amigos[3] = "Sergio"; //Cambia lo que hay en el espacio 3 en este caso agrega un valor mas
amigos[amigos.length]="Pancho";//Agrega un elemento al array
amigos.push("Marcelo"); // Otra forma de agregar un elemento a un array
amigos.pop(); // Elimina el ultimo elemento del array
amigos.unshift("Emilio"); //Agrega un elemento al inicio del array
amigos.shift(); //Elimina el primer elemento del array
amigos.indexOf("Mario"); // Trae cual es la posicion de un elemento.


//Transformar a diferente tipo una variable:
var numero2 = String(numero);//Ahora numero es un string
var texto2 = Number(texto); //Ahora texto es un numero


//BOOLEANAS (Nos regresa si algo es verdadero o falso)

//Ejemplos en los que Boolean devuelve Falso:
Boolean(0); //false
Boolean(null); //false
Boolean(NaN); //false
Boolean(undefined); //false
Boolean(false); //false
Boolean(""); //false

//Ejemplos en los que Boolean devuelve verdadero:
Boolean(1); //true para 1 o cualquier número diferente de cero (0)
Boolean("a"); //true para cualquier caracter o espacio en blanco en el string
Boolean([]); //true aunque el array esté vacío
Boolean({}); //true aunque el objeto esté vacío
Boolean(function(){}); //Cualquier función es verdadera también