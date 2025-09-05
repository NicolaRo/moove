import { Utente } from "./dist/IUtente.js";
export interface IMezzo {
    tipoMezzo: string;
    idMezzo: string;
    stato: boolean;
}
export declare class Mezzo implements IMezzo {
    tipoMezzo: string;
    idMezzo: string;
    stato: boolean;
    private static contatore;
    constructor(tipo: string);
    assegnaUtente(Utente: Utente): void;
    assegnaMezzo(Mezzo: Mezzo): void;
}
//# sourceMappingURL=IMezzo.d.ts.map