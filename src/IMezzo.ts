//======================== IMPORTO LE INTERFACCE ESTERNE =======================================
import {Utente} from "./dist/IUtente.js"

//======================== INTERFACCIA =======================================
// Definisco l'interfaccia IMezzo per gestire i diversi mezzi noleggiabili
//Elenco le proprietà di ciascun mezzo (quelle proprie e condivise da tutti i mezzi)
export interface IMezzo {
  tipoMezzo: string; // "bici", "scooter", "monopattino"
  idMezzo: string; // ID univoco formato da numero random + tipo di mezzo
  stato: boolean; // true = disponibile, false = in uso
}

//================================= CLASSE ===================================
// Creo una classe parametrizzata per implementare le caratteristiche delle interfacce dei diversi mezzi (che verranno assegnati quando creo le variabili dedicate)
export class Mezzo implements IMezzo {
  tipoMezzo: string;
  idMezzo: string;
  stato: boolean;
  private static contatore = 0;
  constructor (tipo: string) { 
    Mezzo.contatore++;
    this.tipoMezzo = tipo; 
    this.idMezzo = `${tipo}-${Mezzo.contatore.toString().padStart(3, '0')}`; 
    this.stato = true;
    console.log("Mezzo creato:", this);
  } 
  assegnaUtente (Utente:Utente ): void {
    console.log ("è stato assegnato", Utente.nome, "al mezzo", this.idMezzo);
    }
} 


import {utente1} from "./IUtente.js"

//======================== CREO I MEZZI =======================================

let bicicletta = new Mezzo("bicicletta");

let monopattino = new Mezzo("monopattino");

let scooter = new Mezzo("scooter");

//======================== ASSEGNO L'UTENTE =======================================
bicicletta.assegnaUtente(utente1);

//======================== IMPORTO L'UTENTE =======================================
