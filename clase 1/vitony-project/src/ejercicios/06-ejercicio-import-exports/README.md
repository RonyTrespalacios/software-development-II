Crear un archivo con 2 interfaces, otro archivo con una funcion que reciba por parametro un objeto de tipo de una interfaz y retorne un string con datos del objeto , y otro archivo que haga el llamado de la funcion.

Propuesta de solución:

entidades.ts -> 
    Crear interfaz de Curso al cual se le asigna los atributos: id_curso, numero de estudiantes inscritos y datos del profesor titular de la materia.
    Para el profesor se debe crear otra interfaz de tipo Persona.
metodos.ts -> 
    Imprimir informacion del curso y profesor asignado.
implements.ts -> 
    Llamar al metodo que imprime