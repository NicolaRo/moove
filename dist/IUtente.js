import { Stato } from "./IMezzo.js";
//================================= CREO LA CLASSE PER L'UTENTE' ===================================
// Creo una classe parametrizzata per implementare le caratteristiche delle interfacce dei diversi mezzi (che verranno assegnati quando creo le variabili dedicate)
export class Utente {
    constructor(nome, cognome, email, metodoPagamento) {
        this.nome = nome;
        this.cognome = cognome;
        this.email = email;
        this.metodoPagamento = metodoPagamento;
    }
    prenotaMezzo(mezzo) {
        if (mezzo.stato === Stato.disponibile) {
            mezzo.stato = Stato.inUso;
            mezzo.assegnaUtente(this);
        }
    }
}
//# sourceMappingURL=IUtente.js.map