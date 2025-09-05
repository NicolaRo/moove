import {IMezzo} from "./dist/IMezzo.js"

export interface ICitta {
    nomeCitta: string;
    mezziDisponibili : [];
}

// ========================= CREO LA CLASSE PER LE 20 CITTÁ
 export class Citta implements ICitta {
    nomeCitta: string;
    mezziDisponibili: [];
    constructor () {
        this.nomeCitta = "Milano";
        this.mezziDisponibili = [];
    }

    aggiungiMezzo(mezzo: IMezzo): void{
        console.log (this.mezziDisponibili);
    }
    
} 




