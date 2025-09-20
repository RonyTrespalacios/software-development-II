

console.log('Ejercicio de nullish coalescing ')

interface Libro {
    title: string,
    author?: {
        nombre?: string,
        pais?: string
    }
    publishedYear?: number
}

function mostrarLibro(libro : Libro){
    const { title } = libro;
    console.log(`Libro: ${title}`)
    console.log(`Autor: ${libro.author?.nombre ?? "Autor desconocido."}`)
    console.log(`Pais: ${libro.author?.pais ?? "Pais desconocido."}`)
    console.log(`Año: ${libro.publishedYear ?? "Año no disponible"}`)
}

const libro1 : Libro = {
    title: "El anillo 2",
    author: {
        nombre: "Pepe Ochoa",
        pais: "Colombia"
    },
    publishedYear: 2025,
}

const libro2 : Libro = {
    title: "La monjita",
    publishedYear: 2025,
}

const libro3 : Libro = {
    title: "Escandlabro 3",
}

mostrarLibro(libro1);
mostrarLibro(libro2);
mostrarLibro(libro3);

export {};