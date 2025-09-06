//======================== IMPORTO LE INTERFACCE ESTERNE =======================================
import { Utente } from "./IUtente.js";

//======================== INTERFACCIA =======================================
// Definisco l'interfaccia IMezzo per gestire i diversi mezzi noleggiabili
//Elenco le proprietà di ciascun mezzo (quelle proprie e condivise da tutti i mezzi)
export interface IMezzo {
  tipoMezzo: string; // "bici", "scooter", "monopattino"
  idMezzo: string; // ID univoco formato da numero progressivo + tipo di mezzo
  statoMezzo: boolean; // true = disponibile, false = in uso
}

//================================= CLASSE ===================================
// Creo una classe parametrizzata per implementare le caratteristiche delle interfacce dei diversi mezzi (che verranno assegnati quando creo le variabili dedicate)
export class Mezzo implements IMezzo {
  tipoMezzo: string;
  idMezzo: string;
  statoMezzo: boolean;
  private static contatore = 0;
  constructor(tipo: string) {
    Mezzo.contatore++;
    this.tipoMezzo = tipo;
    this.idMezzo = `${tipo}-${Mezzo.contatore.toString().padStart(3, "0")}`;
    this.statoMezzo = true;
    console.log("Mezzo creato:", this);
  }
  assegnaUtente(Utente: Utente): void {
    console.log("è stato assegnato", Utente.nome, "al mezzo", this.idMezzo);
  }
}

//======================== CREO I MEZZI =======================================

export let bicicletta = new Mezzo("bicicletta");

console.log("il mezzo", bicicletta.idMezzo, "è stato creato");

export let monopattino = new Mezzo("monopattino");

console.log("il mezzo", monopattino.idMezzo, "è stato creato");

export let scooter = new Mezzo("scooter");

console.log("il mezzo", scooter.idMezzo, "è stato creato");