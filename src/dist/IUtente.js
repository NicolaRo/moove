//================================= CLASSE ===================================
// Creo una classe parametrizzata per implementare le caratteristiche delle interfacce dei diversi mezzi (che verranno assegnati quando creo le variabili dedicate)
export class Utente {
    constructor(nome, cognome, email, metodoPagamento) {
        this.nome = nome;
        this.cognome = cognome;
        this.email = email;
        this.metodoPagamento = metodoPagamento;
    }
    prenotaMezzo(mezzo) {
        if (mezzo.stato === true) {
            console.log("l'utente", (this.nome), "ha prenotato il mezzo:", (mezzo.idMezzo));
        }
        else {
            mezzo.stato === false;
            console.log("Il mezzo", mezzo.idMezzo, "non è disponibile");
        }
    }
}
//======================== CREO L'UTENTE =======================================
let utente1 = new Utente("Mario", "Rossi", "mario@email.com", "carta di credito");
console.log(utente1);
export { utente1 };
//======================== METODO =======================================
//# sourceMappingURL=IUtente.js.map