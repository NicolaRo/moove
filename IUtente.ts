import { IMezzo } from "./Imezzo"; // Importo l'interfaccia IMezzo per poterla utilizzare nella classe utente

let IUtente: string = "" ; // Salvo la variabile utente per recuperarla in base alla registrazione dell'utente.

export interface IUtente { //creo (ed esporto)  l'interfaccia IUtente
    nome: string;
    cognome: string;
    eta: number;
    idUtente: string;
    email: string;
    password: string;
    metodoDiPagamento: string;
}

class utente implements IUtente { // Creo la classe utente che implementa l'interfaccia IUtente
    nome: string;
    cognome: string;
    eta: number;
    idUtente: string;
    email: string;
    password: string;
    metodoDiPagamento: string;
    
    
    constructor (nome: string, eta: number) { // Costruttore della classe utente che richiede nome ed età come parametri obbligatori
        this.nome = this.nome;
        this.cognome = this.cognome;
        this.eta = this.eta;
        this.idUtente = Math.floor(Math.random() * 10000) + this.nome + this.cognome; // Genera un ID univoco formato da numero random + nome + cognome
        this.email = this.email;
        this.metodoDiPagamento = this.metodoDiPagamento;
    }
}

export function prenotaMezzo(mezzo: IMezzo): void {
    console.log(`L'utente ${IUtente} ha prenotato il mezzo con ID ${mezzo.idMezzo}`);
}
