
interface Caja<T> {
    contenido: T
}

interface Comida {
    nombre: string,
    calorias: number
}

function crearCaja<T> (argument: T) : Caja<T> {
    const cajita : Caja<T> = {
        contenido: argument
    }
    return cajita
}

console.log(crearCaja(5)) // { contenido: 5 }
console.log(typeof(crearCaja(5).contenido))
console.log(crearCaja("pizza")) // { contenido: 5 }
console.log(typeof(crearCaja("pizza").contenido));

const salad : Comida = {nombre:"ensalada",calorias: 1200}
console.log(crearCaja(salad));
console.log(typeof(crearCaja(salad).contenido))


export {}