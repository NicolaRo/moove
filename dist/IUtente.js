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
        if (mezzo.statoMezzo === true) {
            console.log(mezzo.statoMezzo);
            mezzo.statoMezzo = false;
            console.log("l'utente", this.nome, "ha prenotato il mezzo:", mezzo.idMezzo);
        }
        else {
            mezzo.statoMezzo === false;
            console.log("Il mezzo", mezzo.idMezzo, "non è disponibile");
        }
    }
}
//======================== CREO L'UTENTE =======================================
export let utente1 = new Utente("Mario", "Rossi", "mario@email.com", "carta di credito");
export let utente2 = new Utente("Francesco", "Gallo", "f.gallo@email.com", "paypal");
export let utente3 = new Utente("Giovanni", "Renesto", "gionesto@email.com", "apple pay");
console.log("sgli utenti:", (utente1), (utente2), (utente3), "sono stati aggiunti");
//# sourceMappingURL=IUtente.js.map