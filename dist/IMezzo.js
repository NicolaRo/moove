//===== DICHIARO ENUM =======
//Assegnando diversi valori alla proprietà "stato" sarà più semplice integrare altri valori in futuro.
export var Stato;
(function (Stato) {
    Stato["disponibile"] = "disponibile";
    //inManutenzione,
    Stato["inUso"] = "In uso";
    //fuoriServizio
})(Stato || (Stato = {}));
//================================= CLASSE ===================================
// Creo una classe parametrizzata per implementare le caratteristiche delle interfacce dei diversi mezzi.
export class Mezzo {
    // Fornisco al costruttore i parametri per creare le classi ed assegnare un valore univoco agli elementi.
    constructor(tipo) {
        Mezzo.contatore++;
        this.tipoMezzo = tipo;
        this.idMezzo = `${tipo}-${Mezzo.contatore.toString().padStart(3, "0")}`;
        this.stato = Stato.disponibile;
    }
    // ===================== ASSEGNO UN MEZZO A CIASCUN UTENTE =====================
    assegnaUtente(Utente) {
        // Il mezzo è "disponibile" di default. 
        if (this.stato === Stato.disponibile) {
            /* console.log ("Stato del mezzo:",this.stato) */
            // Quando viene assegnato ad un Utente cambia la disponibilità.
            this.stato = Stato.inUso;
            console.log("è stato assegnato", Utente, "al mezzo", this.idMezzo);
            console.log("Il mezzo", this.idMezzo, "è attualmente", this.stato);
        }
        else {
            // Nel caso il mezzo scelto non sia disponibile, viene notificato il suo stato attuale.
            console.log("Il mezzo", this.idMezzo, "è attualmente", this.stato);
        }
    }
}
Mezzo.contatore = 0;
//# sourceMappingURL=IMezzo.js.map