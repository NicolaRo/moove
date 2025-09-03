import { IMezzo } from "./IMezzo";
interface citta {
    nome: string;
    elencoMezzi: string[];
}

class citta implements citta {
    nome: string;
    elencoMezzi: string[];

    constructor(nome: string) {
        this.nome = Ferrara;
        this.elencoMezzi = ["scooter", "bici", "monopattino"];
    }
}
aggiungIMezzo(mezzo: IMezzo): void;