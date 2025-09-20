
export interface Comida {
    nombre: String,
    calorias: number,
    esVegana: boolean
}

let pizza : Comida = {
    nombre: "Pizza de calidad",
    calorias: 1200,
    esVegana: true
}

const ensalada : Comida = {
    nombre: "Ensalada mediterranea",
    calorias: 560,
    esVegana: true
}

const hamburguesa : Comida = {
    nombre: "Hamburgruezon",
    calorias: 2500,
    esVegana: true
}

class ComidaService{
    mostrarInfo({nombre, calorias, esVegana}: Comida){
        console.log(`Comida{ Nombre: ${nombre}, Calorias: ${calorias}, Vegana: ${esVegana?"Si":"No"} }`)
    }
    modificarCalorias(comida: Comida, nuevasCalorias: number) : Comida{
        return {
            nombre: comida.nombre,
            calorias: nuevasCalorias,
            esVegana: comida.esVegana
        }
    }
}

class NotificadorComida {
    constructor(
        public comidaservice : ComidaService,
    ){}
    notificar(comida: Comida){
        console.log("Notificando comida......")
        this.comidaservice.mostrarInfo(comida);
    }
}

const service : ComidaService = new ComidaService();
const notificador : NotificadorComida = new NotificadorComida(service);
notificador.notificar(pizza);
notificador.notificar(ensalada);
notificador.notificar(hamburguesa);

pizza = service.modificarCalorias(pizza, 600);
notificador.notificar(pizza);
