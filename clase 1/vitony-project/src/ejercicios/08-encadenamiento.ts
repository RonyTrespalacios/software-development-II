export interface Pasajero {
    nombre: string,
    hijos?: string[] 
}

const pasajero1 : Pasajero = {
    nombre: "Pepito",
    hijos: ['LLanerito', 'Fevereiro']
}

const pasajero2 : Pasajero = {
    nombre: "Perez"
}

const mostrarHijos = (pasajero: Pasajero) => {
    const cantidadHijos = pasajero.hijos?.length || 0;
    console.log(cantidadHijos)
}

mostrarHijos(pasajero1);
mostrarHijos(pasajero2);

export {}