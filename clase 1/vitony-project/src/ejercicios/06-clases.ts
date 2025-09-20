
// export class Persona {
//     public nombre: string;
//     public direccion?: string;
//     constructor(nombre: string, direccion: string){
//         this.nombre = nombre;
//         this.direccion = direccion;
//     }
// }

export class Persona {
    constructor(
        public nombre: string,
        public direccion: string = "Sin dirección asignada."
    ){
    }
}

const persona: Persona = new Persona('Rony');
console.log(persona);

export class Trabajador {
    constructor(
        public persona : Persona,
        public cargo : string,
        public empresa : string,
        public direccion: string
    ){
    }
}

const camellador : Trabajador = new Trabajador(persona,'Ingeniero', 'Unillanos', 'San Antonio');
console.log(camellador)

export {}