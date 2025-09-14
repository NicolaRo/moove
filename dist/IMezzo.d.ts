import { IUtente } from "./IUtente.js";
export declare enum Stato {
    disponibile = "disponibile",
    inUso = "In uso"
}
export interface IMezzo {
    tipoMezzo: string;
    idMezzo: string;
    stato: Stato;
    assegnaUtente(utente: IUtente): void;
}
export declare class Mezzo implements IMezzo {
    tipoMezzo: string;
    idMezzo: string;
    stato: Stato;
    private static contatore;
    constructor(tipo: string);
    assegnaUtente(Utente: IUtente): void;
}
//# sourceMappingURL=IMezzo.d.ts.map