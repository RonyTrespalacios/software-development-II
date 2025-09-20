import {type Curso} from './entidades'

export function cursoToString(curso: Curso) : string {
    const {profesor} = curso;
    return `Curso: {
            id: ${curso.id_curso},
            Curso: ${curso.nombre_curso},
            Activo: ${curso.activo ? "SI" : "NO"},
            estudiantes: ${curso.num_estudiantes},
            Profesor: {
                nombre: ${profesor.nombre},
                edad: ${profesor.edad},
                tipo de documento: ${profesor.tipo_id},
                documento: ${profesor.id},
            }
    }`;
}