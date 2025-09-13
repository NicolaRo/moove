import { IMezzo } from "./IMezzo.js";
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
    prenotaMezzo(mezzo: IMezzo): void;
}
//# sourceMappingURL=IUtente.d.ts.map