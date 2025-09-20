import type { Curso } from './entidades';
import {cursoToString} from './metodos'

const mates : Curso = {
    id_curso: '61809',
    nombre_curso: 'Matematicas',
    activo: true,
    profesor: {
        nombre: 'Pepe Ochoa',
        tipo_id: 'Pasaporte extranjeto',
        id: 'AZ58912',
        edad: 35
    },
    num_estudiantes: 28
}

const salida : string= cursoToString(mates);

console.log(salida);

export {};