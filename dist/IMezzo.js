//================================= CLASSE ===================================
// Creo una classe parametrizzata per implementare le caratteristiche delle interfacce dei diversi mezzi (che verranno assegnati quando creo le variabili dedicate)
export class Mezzo {
    // Fornisco al costruttore i parametri per creare le classi ed assegnare un valore univoco agli elementi
    constructor(tipo) {
        Mezzo.contatore++;
        this.tipoMezzo = tipo;
        this.idMezzo = `${tipo}-${Mezzo.contatore.toString().padStart(3, "0")}`;
        this.statoMezzo = true;
        // console.log per debug
        /* console.log("Mezzo creato:", this); */
    }
    // ===================== ASSEGNO UN MEZZO A CIASCUN UTENTE =====================
    assegnaUtente(Utente) {
        if (this.statoMezzo === true) {
            this.statoMezzo = false;
            //console.log per debug
            console.log("è stato assegnato", Utente.nome, "al mezzo", this.idMezzo);
        }
        else {
            //console.log per debug
            console.log("Il mezzo", this.idMezzo, "non è disponibile - già assegnato");
        }
    }
}
Mezzo.contatore = 0;
//======================== CREO I MEZZI =======================================
export let bicicletta = new Mezzo("bicicletta");
export let monopattino = new Mezzo("monopattino");
export let scooter = new Mezzo("scooter");
console.log("i mezzi:", bicicletta.idMezzo, monopattino.idMezzo, scooter.idMezzo, "sono stati creati");
//======================== CREO FLOTTA DEI MEZZI DISPONIBILI =======================================
export let mezziDisponibili = [bicicletta, monopattino, scooter];
console.log("Mezzi disponibili:", mezziDisponibili);
//# sourceMappingURL=IMezzo.js.map