
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

// ------------------------------------------------------------------
interface Product {
    description: string;
    price: number;
}

const phone : Product = {
    description: "Samsung A54",
    price: 100,
}

const laptop : Product = {
    description: "Lenovo",
    price: 300
}

interface optionTaxes {
    taxes: number,
    products: Product[],
    tip?: number, 
}

function calcTaxes(options: optionTaxes): number[]{

    const {products} = options;
    let totalPrice : number = 0;
    // products.forEach({price : precioProducto} => {
    products.forEach(element => {
        let { price : precioProducto } = element;
        totalPrice += precioProducto;
    });
    const taxes = totalPrice*options.taxes;
    const tips = totalPrice*(options.tip||0);
    return [totalPrice, taxes, tips];
}

const shoppingBag : Product[] = [phone, laptop];
const taxesPercentage: number = 0.19;
const tipsPercentage: number = 0.1;

const [totalPrice, totalTaxes, totalTips] = calcTaxes({
    taxes: taxesPercentage,
    products: shoppingBag,
    tip: tipsPercentage,
})

console.log(shoppingBag)
console.log(`Precio productos: $${totalPrice}.`)
console.log(`Impuestos totales: $${totalTaxes}.`)
console.log(`Propina: $${totalTips}.`)
console.log(`Grand Total: $${totalPrice+totalTaxes+totalTips}.`)


export {};