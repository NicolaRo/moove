//======================== IMPORTO LE INTERFACCE ESTERNE =======================================
import { Utente } from "./IUtente.js";

//===== DICHIARO ENUM =======
//Assegnando diversi valori alla proprietà "stato" sarà più semplice integrare altri valori in futuro

export enum Stato {
  disponibile,
  //inManutenzione,
  inUso,
  //fuoriServizio
}
//======================== INTERFACCIA =======================================
// Definisco l'interfaccia IMezzo per gestire i diversi mezzi noleggiabili
//Elenco le proprietà di ciascun mezzo (quelle proprie e condivise da tutti i mezzi)
export interface IMezzo {
  tipoMezzo: string; // "bici", "scooter", "monopattino"
  idMezzo: string; // ID univoco formato da numero progressivo + tipo di mezzo
  stato: Stato; // Prende il valore assegnato dentro all'enum
}

//================================= CLASSE ===================================
// Creo una classe parametrizzata per implementare le caratteristiche delle interfacce dei diversi mezzi (che verranno assegnati quando creo le variabili dedicate)
export class Mezzo implements IMezzo {
  tipoMezzo: string;
  idMezzo: string;
  stato: Stato;
  private static contatore = 0;
  
  // Fornisco al costruttore i parametri per creare le classi ed assegnare un valore univoco agli elementi
  constructor(tipo: string) {
    Mezzo.contatore++;
    this.tipoMezzo = tipo;
    this.idMezzo = `${tipo}-${Mezzo.contatore.toString().padStart(3, "0")}`;
    this.stato = Stato.disponibile;

    // console.log per debug
    /* console.log("Mezzo creato:", this); */ 
  }
// ===================== ASSEGNO UN MEZZO A CIASCUN UTENTE =====================
  assegnaUtente(Utente: Utente): void {
    
    if (this.stato === Stato.disponibile) {
      this.stato = Stato.inUso;
      //console.log per debug
      console.log("è stato assegnato", Utente.nome, "al mezzo", this.idMezzo);
    } else {
      //console.log per debug
      console.log("Il mezzo", this.idMezzo, "non è disponibile - già assegnato");
    }
  }
}

//======================== CREO I MEZZI =======================================

export let bicicletta = new Mezzo("bicicletta");
export let monopattino = new Mezzo("monopattino");
export let scooter = new Mezzo("scooter");

console.log("i mezzi:",  bicicletta.idMezzo, monopattino.idMezzo, scooter.idMezzo, "sono stati creati");

//======================== CREO FLOTTA DEI MEZZI DISPONIBILI =======================================

export let mezziDisponibili: IMezzo[] = [bicicletta, monopattino, scooter];

console.log("Mezzi disponibili:", mezziDisponibili);