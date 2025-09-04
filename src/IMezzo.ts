//importo l'interfaccia IUtente per poterla utilizzare nel metodo assegnaUtente
import type {IUtente} from "./IUtente";

// Definisco l'interfaccia IMezzo per gestire i diversi mezzi noleggiabili
//Elenco le proprietù di ciascun mezzo (quelle condivise da tutti i mezzi)
export interface IMezzo {
  tipoMezzo: string; // "bici", "scooter", "monopattino"
  idMezzo: string; // ID univoco formato da numero random + tipo di mezzo
  stato: boolean; // true = disponibile, false = in uso
}

//======================== VARIABILI tipo mezzo =======================================

// Definisco le variabili per il tipo di mezzo
tipoMezzo = "bici" | "scooter" | "monopattino";

// Salvo la variabile tipo di mezzo per recuperarla in base alla scelta dell'utente.
let mezzo: tipoMezzo; 

//============================== FUNZIONE ==============================================

// Creo una funzione per generare un ID univoco per ogni mezzo
function IdMezzoUnivoco(idMezzo: string): string {
  return Math.floor(Math.random() * 10000) + idMezzo; // Genera un ID univoco composto da un numero random + tipo di mezzo
}

// Salvo l'Id del mezzo generato nella variabile.
let idMezzo: string = ""; 

//================================= VARIABILI stato mezzo ===============================

// Definisco lo stato del mezzo creando una variabile che contenga il suo stato corrente
let stato = true || false; // Inizialmente il mezzo è disponibile
stato: true || false; // Lo stato può essere true o false


//================================= CLASSE ===================================
// Creo una classe parametrizzata per implementare le caratteristiche delle interfacce dei diversi mezzi (che verranno assegnati quando creo le variabili dedicate)
class Mezzo implements IMezzo {
  tipoMezzo: string;
  idMezzo: string;
  stato: boolean;
  constructor (tipo: string) { 
    this.tipoMezzo = tipo; 
    this.idMezzo = `${Math.floor(Math.random() * 10000)}-${this.tipoMezzo}`; 
    this.stato = true; 
  } 
}

  //============================== METODO ===============================

  // Creo un metodo per assegnare un mezzo ad un utente
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