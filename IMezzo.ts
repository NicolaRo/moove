import {IUtente} from "./IUtente";

// Definisco l'interfaccia IMezzo per gestire i diversi mezzi noleggiabili

//Proprietà di ciascun mezzo (quelle condivise da tutti i mezzi)
export interface IMezzo {
  tipoMezzo: string; // "bici", "scooter", "monopattino"
  idMezzo: string; // ID univoco formato da numero random + tipo di mezzo
  stato: boolean; // true = disponibile, false = in uso
}

// Definisco le variabili per il tipo di mezzo
type tipoMezzo = "bici" | "scooter" | "monopattino";
let mezzo: tipoMezzo; // Salvo la variabile tipo di mezzo per recuperarla in base alla scelta dell'utente.

//====================================================

// Funzione per generare un ID univoco per ogni mezzo
function IdMezzoUnivoco(idMezzo: string): string {
  return Math.floor(Math.random() * 10000) + idMezzo; // Genera un ID univoco composto da un numero random + tipo di mezzo
}

let idMezzo: string = ""; // Salvo l'Id del mezzo generato nella variabile.
//====================================================
// Definisco lo stato del mezzo creando una variabile che contenga il suo stato corrente
let stato = true || false; // Inizialmente il mezzo è disponibile
stato: true || false; // Lo stato può essere true o false

// Creo le classi per implementare le caratteristiche delle interfacce dei diversi mezzi
class bici implements IMezzo {
  tipoMezzo: string;
  idMezzo: string;
  stato: boolean;

  constructor() {
    this.tipoMezzo = "bici"; // Tipo di mezzo
    this.idMezzo = `${Math.floor(Math.random() * 10000)} + ${this.tipoMezzo}`; // Genera un ID univoco composto da un numero random + "bike"
    this.stato = true || false; // Inizialmente il mezzo
  }
}

class scooter implements IMezzo {
  tipoMezzo: string = "scooter";
  idMezzo: string = idMezzo + "scooter";
  stato: boolean;

  constructor() {
    this.tipoMezzo = "scooter"; // Tipo di mezzo
    this.idMezzo = `${Math.floor(Math.random() * 10000)} + ${this.tipoMezzo}`; // Genera un ID univoco composto da un numero random + "bike"
    this.stato = true || false; // Inizialmente il mezzo
  }
}

class monopattino implements IMezzo {
  tipoMezzo: string = "monopattino";
  idMezzo: string = idMezzo + "monopattino";
  stato: boolean;

  constructor() {
    this.tipoMezzo = "monopattino"; // Tipo di mezzo
    this.idMezzo = `${Math.floor(Math.random() * 10000)} + ${this.tipoMezzo}`; // Genera un ID univoco composto da un numero random + "bike"
    this.stato = true || false; // Inizialmente il mezzo
  }
  assegnaUtente(utente: IUtente): void {
        if (!this.stato) {
        alert("Il mezzo non è disponibile.");
        } else if (this.stato) {
        this.stato = false; // Nel caso il mezzo non fosse disponibile
        console.log(`Il mezzo ${this.idMezzo} non è disponibile`);
        } else {
            this.stato = true; // Nel caso il mezzo fosse disponibile
            console.log(`Il mezzo ${this.idMezzo} è stato assegnato all'utente ${utente.nome}`);
        }
    }
}