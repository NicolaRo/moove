import { Mezzo } from "./IMezzo.js";
export interface IUtente {
    nome: string;
    cognome: string;
    email: string;
    metodoPagamento: string;
}
export declare class Utente implements IUtente {
    nome: string;
    cognome: string;
    email: string;
    metodoPagamento: string;
    constructor(nome: string, cognome: string, email: string, metodoPagamento: string);
    prenotaMezzo(mezzo: Mezzo): void;
}
export declare let utente1: Utente;
export declare let utente2: Utente;
export declare let utente3: Utente;
//# sourceMappingURL=IUtente.d.ts.map