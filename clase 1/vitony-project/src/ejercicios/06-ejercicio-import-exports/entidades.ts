export interface Persona {
    nombre: string,
    tipo_id: string,
    id: string,
    edad: number
}

export interface Curso {
    id_curso: string,
    nombre_curso: string,
    activo: boolean,
    profesor: Persona,
    num_estudiantes: number
} 