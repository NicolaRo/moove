import { IMezzo } from "./Imezzo";


export interface IUtente {
    id: number;
    nome: string;
    cognome: string;
    email: string;
    password: string;
    metodoDiPagamento: string;
}

class utente implements utente {
    nome: string;
    cognome: string;
    idUtente: number;
    eta: number;
    email: string;
    metodoDiPagamento: string;
    
    constructor (nome: string, eta: number) {
        this.nome = nome;
        this.cognome = cognome;
        this.eta = eta;
        this.idUtente = Math.floor(Math.random() * 10000); // Genera un ID casuale (deve essere univoco!!!)
        this.metodoDiPagamento = this.metodoDiPagamento;
    }
noleggiaMezzo = () => {
    console.log(`Ciao, mi chiamo ${this.nome}, ho ${this.eta} anni, il mio ID è ${this.id} ed il mio metodo di pagamento è ${this.metodoDiPagamento}`);
} if (IUtente.eta < 18) {
        alert("Devi essere maggiorenne per noleggiare un mezzo.");
    } else if (IMezzo.stato === false) {
            alert("Il mezzo non è disponibile.");
    } else {
        IMezzo.stato = true  // Cambia lo stato del mezzo a "in uso"
        console.log("Puoi noleggiare un mezzo.");
    } 
}

let IUtente = new utente("Marco", "Rossi", 35, 12345, "carta di credito");

prenotaMezzo(mezzo: IMezzo) void” {
    console.log(`L'utente con ID ${this.idUtente} ha prenotato il mezzo con ID ${mezzo.idMezzo}`);
}
