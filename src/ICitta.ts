import {(IMezzo[])} from "./IMezzo"

export interface ICitta {
    nomeCitta: string;
    mezziDisponibili : [""];
}

// ========================= CREO LA CLASSE PER LE 20 CITTÁ
 export class Citta implements ICitta {
    nomeCitta: string;
    mezziDisponibili: [];
    constructor () {
        this.nomeCitta = "Milano";
        this.mezziDisponibili = IMezzo;
    }
} 

console.log ({mezziDisponibili})
