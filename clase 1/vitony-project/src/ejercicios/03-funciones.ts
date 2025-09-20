
function nombre(a:any, b?:any): void{
    console.log(a);
    if(b){
        console.log(b);
    }
}

function sumar(a:number, b:number) : number{
    return a + b;
}

let result : number = sumar(1,2);

const sumar2 = (n1 : number, n2 : number) : number => {
    return n1 + n2;
}
let result2 : number = sumar2(1,2);
console.log({result, result2});

function multiplicar(n1:number, n2:number=1, n3?:number) : number {
    return n1*n2*(n3||1);
}

let result3 : number = multiplicar(2,2,2)
console.log(result3);

/// -------------------- ///

interface PersonajeInterface {
    nombre: string;
    vida: number;
    mostrarDetalle: () => void;
}

const healthPercentage = (personaje:PersonajeInterface, valor:number) => {
    personaje.vida += valor;
}

const persona : PersonajeInterface = {
    nombre: "Rony",
    vida: 88,
    mostrarDetalle(){
        console.log(`Nombre -> ${this.nombre}, vida -> ${this.vida}`)
    }
}

console.log(persona.mostrarDetalle())

healthPercentage(persona,10);

console.log(persona.mostrarDetalle())   

export {};