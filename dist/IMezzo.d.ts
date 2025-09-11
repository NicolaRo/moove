import { Utente } from "./IUtente.js";
export declare enum Stato {
    disponibile = 0,
    inUso = 1
}
export interface IMezzo {
    tipoMezzo: string;
    idMezzo: string;
    stato: Stato;
}
export declare class Mezzo implements IMezzo {
    tipoMezzo: string;
    idMezzo: string;
    stato: Stato;
    private static contatore;
    constructor(tipo: string);
    assegnaUtente(Utente: Utente): void;
}
export declare let bicicletta: Mezzo;
export declare let monopattino: Mezzo;
export declare let scooter: Mezzo;
export declare let mezziDisponibili: IMezzo[];
//# sourceMappingURL=IMezzo.d.ts.map