import { IMezzo } from "./IMezzo.js";
export interface ICitta {
    nomeCitta: string;
    mezziDisponibili: IMezzo[];
}
export declare class Citta implements ICitta {
    nomeCitta: string;
    mezziDisponibili: IMezzo[];
    constructor(nomeCitta: string, mezziDisponibili?: IMezzo[]);
    aggiungiMezzo(mezzo: IMezzo): void;
}
export declare let milano: Citta;
export declare let roma: Citta;
export declare let torino: Citta;
export declare let napoli: Citta;
export declare let firenze: Citta;
export declare let bologna: Citta;
export declare let venezia: Citta;
export declare let verona: Citta;
export declare let genova: Citta;
export declare let palermo: Citta;
export declare let catania: Citta;
export declare let bari: Citta;
export declare let lecce: Citta;
export declare let ancona: Citta;
export declare let perugia: Citta;
export declare let pescara: Citta;
export declare let ferrara: Citta;
export declare let trento: Citta;
export declare let bolzano: Citta;
export declare let catanzaro: Citta;
export declare let parma: Citta;
//# sourceMappingURL=ICitta.d.ts.map