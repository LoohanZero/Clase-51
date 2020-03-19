// 1- Para un array de números, hacé una función usando map que te devuelva el cuadrado de cada número
const numeros = [1, 2, 3, 4, 5, 6, 7];

const elCuadrado = x => x * x; 

const cuadrado = numeros.map(elCuadrado); 
// console.log(cuadrado);

// 2- Para un array de strings, hacé una función usando map que te devuelva una letra Uppercase y una Lowercase, ejemplo: ["hola", "chau"] -> ["HoLa", "ChAu"]
const chamuyo = ["hola", "chau"];
const aMayuscula = string => {
    let springSpliteado = [ ...string ];
    let nuevoArray = [];

    for (let i = 0; i < springSpliteado.length; i++) {
        const cambiaMayuscula = i % 2 === 0 ? springSpliteado[i].toUpperCase() : springSpliteado[i].toLowerCase();

        nuevoArray.push(cambiaMayuscula)
      

    }
    nuevoArray = nuevoArray.join('');
    return nuevoArray
}

const cambioLetras = chamuyo.map(aMayuscula);



// 3- Para un array de números, hacer una función filter que te devuelva solo los pares.

const otrosNumeros = [7, 5, 2, 15, 21, 30, 85, 90];

const losPares = x => x % 2 === 0;

const filtrarPares = otrosNumeros.filter(losPares);

// console.log(filtrarPares);

// // 4- Para un array de letras, hacer una función que te devuelva el ascii code de cada letra con su index y su letra en formato index_letra_código , ejemplo: ["a", "b", "c"] -> ["0_a_97", "1_b_98", "2_c_99"]
// const abece = ["a", "b", "c"]; 

// const generaASCII = letra => {

// }





// 5- Para un array de letras, hacer una función de filter que te devuelva las letras en posicion inpar, ejemplo: ["a", "b", "c", "d"] -> ["b", "d"]

const letras = ["a", "b", "c", "d"];

const losImpares =(element, x) => { 
    if (!(x % 2 === 0)) {
        return element;
    } 
}

const filtrarImpares = letras.filter(losImpares);

// console.log(filtrarImpares)

// 6- para un array de objetos con propiedad "name", devolver un array de names, ejemplo: [{ name: "Loohan" }, { name: "Rodrigo"} ] -> ["Loohan", "Rodrigo"]

const nombres = [{ name: "Loohan" }, { name: "Rodrigo"} ] ;

const losNombres = (nombre) => {
    const nombreSeleccionado = nombre.name;
    
    return nombreSeleccionado
}

const reducirNombre = nombres.map(losNombres);

// 7- para un array de objetos, filtrar todos los objetos que no tengan la propiedad lastname, ejemplo: [{ name: "Loohan", lastname: "Sanchez" }, { name: "Rodrigo" }] -> [{ name: "Loohan", lastname: "Sanchez" }]

const hermanos =  [{ name: "Loohan", lastname: "Sanchez" }, { name: "Rodrigo" }];

const sinApellido = hermano => hermano.lastname === undefined;

const filtrarSinApellido = hermanos.filter(sinApellido)
// console.log(filtrarSinApellido)

// 8- Para un array de objetos cualquiera, agregar la propiedad index con el valor de index de cada objeto: [{ a: "a"}, { b: "b"}] -> [{ index: 0, a: "a"}, { index: 1, b: "b"}]

const arrayObjetos = [{ a: "a"}, { b: "b"}];

const agregoIndex = (elemento, i) => {
    const agregoPropiedad =  { ...{ index: i } , ...elemento};


    return agregoPropiedad
}

const indexAgregado = arrayObjetos.map(agregoIndex);

// 9- Para un array de objetos con propiedad name, reemplazar todos los nombres por "Mike": 
// [{ name: "Loohan", lastname: "Sanchez" }, { name: "Juan", lastname: "Perez" } ] -> [{ name: "Mike",  lastname: "Sanchez"}, { name: "Mike", lastname: "Perez"}]

const arrayObjetos2 = [{ name: "Loohan", lastname: "Sanchez" }, { name: "Juan", lastname: "Perez" } ];

const reemplazoMike = elemento => {
    elemento.name = "Mike";

    nuevoNombre = { ...elemento }
    return nuevoNombre
}

const reemplazarPorMike = arrayObjetos2.map(reemplazoMike)
// console.log(reemplazarPorMike)