import { Utente } from "./IUtente.js";
export interface IMezzo {
    tipoMezzo: string;
    idMezzo: string;
    statoMezzo: boolean;
}
export declare class Mezzo implements IMezzo {
    tipoMezzo: string;
    idMezzo: string;
    statoMezzo: boolean;
    private static contatore;
    constructor(tipo: string);
    assegnaUtente(Utente: Utente): void;
}
export declare let bicicletta: Mezzo;
export declare let monopattino: Mezzo;
export declare let scooter: Mezzo;
export declare let parcoMezzi: IMezzo[];
//# sourceMappingURL=IMezzo.d.ts.map