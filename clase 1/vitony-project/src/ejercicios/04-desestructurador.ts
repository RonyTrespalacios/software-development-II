
interface Details {
    autor: string,
    year: number,
};


interface ReproductorAudio {
    volume: number;
    duration: number;
    song: string;
    detail: Details
};

const reproductorAudio : ReproductorAudio = {
    volume: 50,
    duration: 10,
    song: "Testing song",
    detail: {
        autor: "Pepito",
        year: 2025,
    }
};

// const song1 = reproductorAudio.song;
// const autor = reproductorAudio.detail.autor;

// Desestructurador
const { song: nombreCancion, duration : duracionCancion} = reproductorAudio;
console.log({nombreCancion, duracionCancion})

// Ejemplo deconstructores anidados
// 1. 
const { detail } = reproductorAudio;
const { autor : nombreAutor1 } = detail;
// 2. 
const { autor: nombreAutor2 } = reproductorAudio.detail;
// 3. 
const { detail:{autor: nombreAutor3}} = reproductorAudio;
// imprimir
console.log({nombreAutor1, nombreAutor2, nombreAutor3});

// Arrays
let frutas = ["Peras", "Manzanas", "Fresas"];
console.log("Frutas: " + (frutas[3] || "No se ha encontrado."));

const [f1, f2, f3, f4 = "No se ha encontrado"] = frutas;
const [,,fruta3] = frutas;
console.log({f4, fruta3})


export {};