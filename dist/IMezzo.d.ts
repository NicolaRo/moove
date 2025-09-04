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
    private assegnaUtente;
}
//# sourceMappingURL=IMezzo.d.ts.map