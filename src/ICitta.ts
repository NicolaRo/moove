import { IMezzo, Mezzo, mezziDisponibili } from "./IMezzo.js";
import { Utente } from "./IUtente.js";

export interface ICitta {
  nomeCitta: string;
  mezziDisponibili: IMezzo [];
}

// ========================= CREO LA CLASSE PER LE CITTÁ =======================================

export class Citta implements ICitta {
  nomeCitta: string;
  mezziDisponibili: IMezzo[];

  constructor(
    nomeCitta: string, 
    mezziDisponibili: IMezzo[] = []
  ) {
    this.nomeCitta = nomeCitta;
    this.mezziDisponibili = mezziDisponibili;
    // console.log per debug
    /* console.log("Città creata:", this, "con mezzi disponibili:", this.mezziDisponibili); */
  }

aggiungiMezzo(mezzo: IMezzo): void {
  let mezziDisponibili = this.mezziDisponibili;
  mezziDisponibili.push(mezzo);
  //console.log per debug
  /* console.log("In", this.nomeCitta, "sono disponibili:", mezziDisponibili); */
}

}
//======================== CREO LA CITTÁ =======================================

export let milano = new Citta("Milano");
export let roma = new Citta("Roma");
export let torino = new Citta("Torino");
export let napoli = new Citta("Napoli");
export let firenze = new Citta("Firenze");
export let bologna = new Citta("Bologna");
export let venezia = new Citta("Venezia");
export let verona = new Citta("Verona");
export let genova = new Citta("Genova");
export let palermo = new Citta("Palermo");
export let catania = new Citta("Catania");
export let bari = new Citta("Bari");
export let lecce = new Citta("Lecce");
export let ancona = new Citta("Ancona");
export let perugia = new Citta("Perugia");
export let pescara = new Citta("Pescara");
export let ferrara = new Citta("Ferrara");
export let trento = new Citta("Trento");
export let bolzano = new Citta("Bolzano");
export let catanzaro = new Citta("Catanzaro");
export let parma = new Citta("Parma");

//======================== TEST =======================================
// console.log per debug

/* console.log(
  "le città di:",(milano), (roma), (torino), (napoli), (firenze), (bologna), (venezia), (verona), (genova), (palermo), (catania), (bari), (lecce), (ancona), (perugia), (pescara), (ferrara), (trento), (bolzano), (catanzaro), (reggioCalabria),
  "sono state create correttamente"
); */
