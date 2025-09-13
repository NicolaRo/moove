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
            console.log("il mezzo:", mezzo, "è", mezzo.stato);
            // L'Utente prenota il mezzo che è "disponibile" di default.
            console.log("l'utente", this.nome, "ha prenotato il mezzo:", mezzo.idMezzo);
            // Il mezzo cambia di stato.      
            mezzo.stato = Stato.inUso;
            console.log("Il mezzo", mezzo.idMezzo, "è stato prenotato");
        }
        else {
            console.log("Il mezzo", mezzo.idMezzo, "è", mezzo.stato);
        }
    }
}
//# sourceMappingURL=IUtente.js.map