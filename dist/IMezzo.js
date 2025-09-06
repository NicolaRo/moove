//================================= CLASSE ===================================
// Creo una classe parametrizzata per implementare le caratteristiche delle interfacce dei diversi mezzi (che verranno assegnati quando creo le variabili dedicate)
export class Mezzo {
    constructor(tipo) {
        Mezzo.contatore++;
        this.tipoMezzo = tipo;
        this.idMezzo = `${tipo}-${Mezzo.contatore.toString().padStart(3, "0")}`;
        this.statoMezzo = true;
        console.log("Mezzo creato:", this);
    }
    assegnaUtente(Utente) {
        console.log("è stato assegnato", Utente.nome, "al mezzo", this.idMezzo);
    }
}
Mezzo.contatore = 0;
//======================== CREO I MEZZI =======================================
export let bicicletta = new Mezzo("bicicletta");
console.log("il mezzo", bicicletta.idMezzo, "è stato creato");
export let monopattino = new Mezzo("monopattino");
console.log("il mezzo", monopattino.idMezzo, "è stato creato");
export let scooter = new Mezzo("scooter");
console.log("il mezzo", scooter.idMezzo, "è stato creato");
//# sourceMappingURL=IMezzo.js.map