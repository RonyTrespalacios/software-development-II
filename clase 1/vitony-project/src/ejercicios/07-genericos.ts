// {
//     status: boolean,
//     message: string,
//     statusCode: number,
//     result: [usuario]
// }

// usuario {
//     nombre: string,
//     apellido: string,
//     edad: number,
// }

// function verTipo(argument: any){
//     return argument;
// }
// const prueba = verTipo("a");
// console.log(prueba);}

function verTipo<T>(argument : T) : T {
    return argument;
}

let prueba1 = verTipo("a");
let prueba2 = verTipo(true);
let prueba3 = verTipo(14);
console.log({prueba1, prueba2, prueba3});
console.log(" -> " + prueba1.toUpperCase())

interface Mamifero {
    nombre: string,
    raza: string,
    edad: number
}

const vaca : Mamifero = {
    nombre: "VACA",
    raza: "Japonesa",
    edad: 2
}

let prueba4 = verTipo(vaca);
console.log(prueba4)



export {};