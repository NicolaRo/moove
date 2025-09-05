import { Mezzo } from "./dist/IMezzo.js";
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
        console.log("l'utente", { Utente }, "ha prenotato il mezzo:", { Mezzo });
    }
}
//======================== CREO L'UTENTE =======================================
let utente1 = new Utente("Mario", "Rossi", "mario@email.com", "carta di credito");
console.log(utente1);
export { utente1 };
//# sourceMappingURL=IUtente.js.map