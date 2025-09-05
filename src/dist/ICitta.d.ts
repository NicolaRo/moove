import { IMezzo } from "./dist/IMezzo.js";
export interface ICitta {
    nomeCitta: string;
    mezziDisponibili: [];
}
export declare class Citta implements ICitta {
    nomeCitta: string;
    mezziDisponibili: [];
    constructor();
    aggiungiMezzo(mezzo: IMezzo): void;
}
//# sourceMappingURL=ICitta.d.ts.map