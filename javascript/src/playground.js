
/**
 * 1.- Array operation .-
*/
console.log("* HEAD *******************************");
/**
 * Head
 * Implementa una función head (inmutable), tal que,
 * dado un array como entrada extraiga
 * y devuelva su primer elemento.
 * Uliza destructuring.
 * 
 * const head = (/ * array * / ) => {}; // Implementation here.
*/
// definimos un array 
const student = ['a', 'b', 'c'];
// destructuring para tomar el primer valor del array

// arrow function
const head = ([ first ]) => first;

// llamamos a head arrow funtion
console.log(head(student));

console.log("* TAIL *******************************");
/**
 * Tail
 * Implementa una función tail (inmutable), tal que,
 * dado un array como entrada
 * devuelta todos menos el primer elemento. 
 * Uliza rest operator.
 * 
 * const tail = (/ * array * /) => {}; // Implementation here.
 */
// definimos un array 
const color = [ 'red', 'blue', 'green', 'black', 'white' ];
console.log("Array .- " + color);

// pruebas .- 
// console.log("-------------");
// console.log("sin rest");
// const tail = ( args ) => { console.log( args.slice(1, args.length) )};
// tail(color);

console.log("-------------");
console.log("con operador rest");
const tail02 = ( [, ...others] ) => others;
console.log(tail02(color));

console.log("* INIT *******************************");
/**
 * Init
 * Implementa una función init (inmutable), tal que,
 * dado un array como entrada devuelva todos
 * los elementos menos el último.
 * Uliza los métodos que ofrece
 * Array.prototype.
 * 
 * const init = (/ * array * / ) => {}; // Implementation here. 
 */
// definimos un array
const month = [
  'January', 'February', 'March',
  'April', 'May' , 'June',
  'July', 'August', 'September',
  'October', 'November', 'December',
];

const init = ( [...args ] ) => ( args[0] );
console.log(init(month));

console.log("* LAST *******************************");
/**
 * Last
 * Implementa una función last (inmutable),
 * tal que, dado un array como entrada devuelva
 * el úlmo elemento.
 * 
 * const last = (/ * array * / ) => {}; // Implementation here. 
 */

const last = ( [...args ] ) => (
  args[(args.length - 1)]
);

console.log(last(month));

/**
 * 2.- Concat .-
*/

console.log("* CONCAT *******************************");
/**
 * Implementa una función concat (inmutable)
 * tal que, dados 2 arrays como entrada,
 * devuelva la concatenación de ambos.
 * Utiliza rest / spread operators.
 * 
 * const concat = (a, b) => {}; // Implementation here.
 * 
 * Opcional
 * Implementa una versión del ejercicio anterior
 * donde se acepten múlples arrays de entrada (más de 2).
 * 
*/
// definimos un array


// console.log(array01 + "\n" + array02);
// console.log( array01.concat(array02));
// console.log([...array01, ...array02]);


// const concat = ( ...concatArr ) => concatArr ;
// Duda .-
// (8) ["a", "b", "c", "d", "e", "f", "g", "h"]0: "a"1: "b"2: "c"3: "d"4: "e"5: "f"6: "g"7: "h"length: 8__proto__: Array(0)
// playground.js:125 [Array(20)]

// const concat = ( [...concatArr] ) => concatArr ;

// console.log(concat( [...array01 , ...array02, ...array03, ...array04, ...array05] ));

// hacerlo de otra forma *************************************** <------ revisar esto
// con  -> reduce <-


// var integrado = [array01, array05].reduce(function(a,b) {
//   return a.concat(b);
// }, []);

// cons integrado = ( ...argumentosArr ) => ( argumentosArr.reduce(function(a,b)));

const array01 = ["a", "b", "c", "d"];
const array02 = ["e", "f", "g", "h"];
const array03 = ["i", "j", "k", "l"];
const array04 = ["ll", "m", "n", "ñ"];
const array05 = ["o", "p", "q", "r"];


const concatA = ( ...arraysVarios ) => {
  return arraysVarios.reduce((valorAnterior, valorActual) => {
    return valorAnterior.concat(valorActual);
  }, [] )
}

/* Version con return implicito
const concatA = ( ...arraysVarios ) => 
  arraysVarios.reduce((valorAnterior, valorActual) => 
    valorAnterior.concat(valorActual) , [] )
*/

console.log(concatA(array01, array02, array03, array04, array05)); 
console.log("* fin de concat ***");

/**
 * 3.- Clone .-
*/

console.log("* CLONE *******************************");
/**
 * CLONE
 * 
 * Implementa una función clone que, apartir de un objeto de entrada source devuelva
 * un nuevo objeto con las propiedades de source :
 * function clone(source) {
 *    // Implementation here.
 * }
 * 
*/

// objeto .-
// propiedades copiadas no copìa en profundida o plus a profundidad ( recursiva )
const obj = { one: 1, two: 2 };

// duda .- 
// const obj2 = obj;

function clone(source) {
  return { ...source };
}

 const obj2 = { ...obj };

console.log(obj === obj2);
console.log(obj == obj2);
console.log(obj);
console.log(obj2);

console.log(clone(obj));

/**
 * 3.- Merge .-
*/

console.log("* MERGE *******************************");
/**
 * MERGE
 * 
 * Implementa una función merge que, dados dos objetos de entrada source y target ,
 * devuelva un nuevo objeto con todas las propiedades de target y de source , y en caso
 * de propiedades con el mismo nombre, source sobreescribe a target .
 * Por ejemplo, dados estos 2 objetos:
 * const a = {name: "Maria", surname: "Ibañez", country: "SPA"};
 * const b = {name: "Luisa", age: 31, married: true};
 * el resultado de mezclar a sobre b sería:
 * merge(a, b) // {name: "Maria", age: 31, married: true, surname: "Ibañez", c
 * 
 * TIP: Puedes usar la función “clone” del apartado A.
 * function merge(source, target) {
 *  // Implementation here.
 * }
 * 
*/

const a = {name: "Maria", surname: "Ibañez", country: "SPA"};
const b = {name: "Luisa", age: 31, married: true};

function merge(source, target) {
  console.log(source);
  console.log(target);
  // al objeto b los sobreescribimos con a ( nos da las diferencias )
  return { ...target, ...source };
}

console.log( merge(a,b) );

/**
 * 4.- Read Books .-
*/

console.log("* Read Books *******************************");
/**
 * Read Books
 * 
 * Crea una función isBookRead que reciba una lista de libros y un tulo y devuelva si se
 * ha leído o no dicho libro.
 * Un libro es un objeto con title como string y isRead como booleano. En caso de no existir el libro devolver false
 * 
 * TIP: Existe un método de Array.prototype que te ayudará a buscar según un patrón.
 * function isBookRead(books, titleToSearch) {
 *  // Implementation here
 * }
 * 
*/

/*  función que recibe una lista de libros y nos da unresultado de si esta leido o no ( con patrones y con typescript ) */
const books = [
  {title: "Harry Potter y la piedra filosofal", isRead: true},
  {title: "Canción de hielo y fuego", isRead: false},
  {title: "Devastación", isRead: true},
];

function isBookRead(books, titleToSearch) {
  
  // lengthBooks = books.length;

  // for(i= 0; i< lengthBooks; i++ ) {
  //   if (books[i].title == titleToSearch) {
  //     isReadBook = books[i].isRead;
  //     break;
  //   } else {
  //     isReadBook = books[i].isRead;
  //   }
  // }

  // console.log("--- buscamos .- " + titleToSearch );
  // for ( i = 0; i < books.length ; i++) {
  //   if (books[i].title.includes(titleToSearch)) {
  //     return books[i].isRead;
  //   } else if ( typeof books[i].title.includes(titleToSearch) != "undefined" ){
  //      if (books.length < i+1) {
  //       isBookRead(books, books[i+1].title);
  //      }
  //   }
  // }
  // return false;
  
  // probar con find()
  // corrección con tutoria .-
  // return books.find(book => book.title === titleToSearch && book.isRead) ? true : false ;
  const bookRead = books.find(book => book.title === titleToSearch && book.isRead);
  return Boolean(bookRead);
}

console.log(isBookRead(books, "Devastación")); // true
console.log(isBookRead(books, "Canción de hielo y fuego")); // false
console.log(isBookRead(books, "Los Pilares de la Tierra")); // false

/**
 * 5.- Slot Machine .-
*/

console.log("* Slot Machine *******************************");
/**
 * Slot Machine
 * 
 * 
 * El objevo de este ejercicio es crear una máquina tragaperras ulizando clases donde
 * cada vez que juguemos insertemos una moneda. Cada máquina tragaperras (instancia)
 * tendrá un contador de monedas que automácamente se irá incrementando conforme
 * vayamos jugando.
 * Cuando se llame al método play el número de monedas se debe incrementar de forma
 * automáca y debe generar tres booleanos aleatorios que representarán el estado de las
 * 3 ruletas. El usuario habrá ganado en caso de que los tres booleanos sean true , y por
 * tanto deberá mostrarse por consola el mensaje:
 * "Congratulations!!!. You won <número de monedas> coins!!"
 * y reiniciar las monedas almacenadas, ya que las hemos conseguido y han salido de la
 * máquina.
 * 
 * En caso contrario deberá mostrar otro mensaje:
 * "Good luck next time!!".
 * Ejemplo de uso
 * class SlothMachine {
 *   ...
 * }
 * const machine1 = new SlothMachine();
 * machine1.play(); // "Good luck next time!!"
 * machine1.play(); // "Good luck next time!!"
 * machine1.play(); // "Congratulations!!!. You won 3 coins!!"
 * machine1.play(); // "Good luck next time!!"
 * machine1.play(); // "Congratulations!!!. You won 2 coins!!"
 *
*/

/* usar clase , simular maquina tragaperras .-  ganas 3 boleanos a true y se vacia la maquina */

/**
 * Declaracion de la clase.
 */
class SlothMachine {

    constructor() {
        //Variables que estaran disponibles en el scope global
        //de la clase
        this.moneda = 0;
        this.premio = 0;
        // console.log("Se genero la instancia de SlothMachine");
    }//constructor
    
    getRandom() {
      return (Math.random() >= 0.5);
    }

    play() {
        this.moneda = this.moneda + 1;
        this.premio = this.moneda;
        console.log("********************* INICIAMOS EL JUEGO *******************************************");
        console.log(`Tu credito es => ${this.moneda}`);
        console.log("***********************************************");

        const roulette_01 = this.getRandom();
        const roulette_02 = this.getRandom();
        const roulette_03 = this.getRandom();

        console.log(`     Ruleta 1 => ${roulette_01}\n     Ruleta 2 => ${roulette_02}\n     Ruleta 3 => ${roulette_03}`);

        if( roulette_01 && roulette_02 && roulette_03 ){
          console.log(`************* \n PREMIOOOOOOO Has ganado .- ${this.premio} moneda en la LemonCOde-Roulette \n**************`);
          this.moneda = 0;
          this.premio = 0;
        }else{
          console.log(`sigue jugando , te puede tocar ${this.premio} monedas`);
        }
        console.log("********************* FIN DEL JUEGO ************************************************\n ");
        console.log("====================================================================================\n \n \n \n ");
    }
}

const machine1 = new SlothMachine();
machine1.play(); // "Good luck next time!!"
machine1.play(); // "Good luck next time!!"
machine1.play(); // "Congratulations!!!. You won 3 coins!!"
machine1.play(); // "Good luck next time!!"
machine1.play(); // "Congratulations!!!. You won 2 coins!!"
machine1.play(); // "Good luck next time!!"
machine1.play(); // "Good luck next time!!"
machine1.play(); // "Congratulations!!!. You won 3 coins!!"
machine1.play(); // "Good luck next time!!"
machine1.play(); // "Congratulations!!!. You won 2 coins!!"
machine1.play(); // "Good luck next time!!"
machine1.play(); // "Good luck next time!!"
machine1.play(); // "Congratulations!!!. You won 3 coins!!"
machine1.play(); // "Good luck next time!!"
machine1.play(); // "Congratulations!!!. You won 2 coins!!"
machine1.play(); // "Good luck next time!!"
machine1.play(); // "Good luck next time!!"
machine1.play(); // "Congratulations!!!. You won 3 coins!!"
machine1.play(); // "Good luck next time!!"
machine1.play(); // "Congratulations!!!. You won 2 coins!!"