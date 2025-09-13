//======================== IMPORTO LE INTERFACCE ESTERNE =======================================
import { Utente } from "./IUtente.js";

//===== DICHIARO ENUM =======
//Assegnando diversi valori alla proprietà "stato" sarà più semplice integrare altri valori in futuro.

export enum Stato {
  disponibile = "disponibile",
  //inManutenzione,
  inUso = "In uso",
  //fuoriServizio
}
//======================== INTERFACCIA =======================================
// Definisco l'interfaccia IMezzo per gestire i diversi mezzi noleggiabili.
//Elenco le proprietà di ciascun mezzo (quelle proprie e condivise da tutti i mezzi).
export interface IMezzo {
  tipoMezzo: string; // "bici", "scooter", "monopattino".
  idMezzo: string; // ID univoco formato da numero progressivo + tipo di mezzo.
  stato: Stato; // Prende il valore assegnato dentro all'enum.
}

//================================= CLASSE ===================================
// Creo una classe parametrizzata per implementare le caratteristiche delle interfacce dei diversi mezzi.
export class Mezzo implements IMezzo {
  tipoMezzo: string;
  idMezzo: string;
  stato: Stato;
  private static contatore = 0;
  
// Fornisco al costruttore i parametri per creare le classi ed assegnare un valore univoco agli elementi.
  constructor(tipo: string) {
    Mezzo.contatore++;
    this.tipoMezzo = tipo;
    this.idMezzo = `${tipo}-${Mezzo.contatore.toString().padStart(3, "0")}`;
    this.stato = Stato.disponibile;
  }
// ===================== ASSEGNO UN MEZZO A CIASCUN UTENTE =====================
  assegnaUtente(Utente: Utente): void {
// Il mezzo è "disponibile" di default. 
    if (this.stato === Stato.disponibile) {
      /* console.log ("Stato del mezzo:",this.stato) */
// Quando viene assegnato ad un Utente cambia la disponibilità.
      this.stato = Stato.inUso;
      console.log("è stato assegnato", Utente, "al mezzo", this.idMezzo);
      console.log("Il mezzo", this.idMezzo, "è attualmente",this.stato);
    } else {
// Nel caso il mezzo scelto non sia disponibile, viene notificato il suo stato attuale.
      console.log("Il mezzo", this.idMezzo, "è attualmente",this.stato);
    }
  }
}