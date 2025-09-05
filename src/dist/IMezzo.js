//================================= CLASSE ===================================
// Creo una classe parametrizzata per implementare le caratteristiche delle interfacce dei diversi mezzi (che verranno assegnati quando creo le variabili dedicate)
export class Mezzo {
    constructor(tipo) {
        Mezzo.contatore++;
        this.tipoMezzo = tipo;
        this.idMezzo = `${tipo}-${Mezzo.contatore.toString().padStart(3, '0')}`;
        this.stato = true;
        console.log("Mezzo creato:", this);
    }
    assegnaUtente(Utente) {
        console.log("è stato assegnato", Utente.nome, "al mezzo", this.idMezzo);
    }
}
Mezzo.contatore = 0;
import { utente1 } from "./IUtente.js";
//======================== CREO I MEZZI =======================================
let bicicletta = new Mezzo("bicicletta");
let monopattino = new Mezzo("monopattino");
let scooter = new Mezzo("scooter");
//======================== ASSEGNO L'UTENTE =======================================
bicicletta.assegnaUtente(utente1);
//======================== IMPORTO L'UTENTE =======================================
//# sourceMappingURL=IMezzo.js.map