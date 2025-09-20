import {type Product, calcTaxes} from './04-desestructurador'

const carrito : Product[] = [
    {
        description: 'Carro',
        price: 1020
    },
    {
        description: '',
        price: 1010
    },
]

const [total, totalImpuesto, totalPropinas] = calcTaxes({
    taxes: 0.19,
    products: carrito,
    tip: 0,
});

console.log({total, totalImpuesto, totalPropinas})

export {}