import { IMezzo, Stato } from "./IMezzo.js";
import { ICitta } from "./ICitta.js";
import { utente1 } from "./test.js";
//================================= CLASSE ===================================
export interface IUtente {
  nome: string;
  cognome: string;
  email: string;
  metodoPagamento: string; // "carta di credito", "paypal", "apple pay"
}

//================================= CREO LA CLASSE PER L'UTENTE' ===================================
// Creo una classe parametrizzata per implementare le caratteristiche delle interfacce dei diversi mezzi (che verranno assegnati quando creo le variabili dedicate)
export class Utente implements IUtente {
  nome: string;
  cognome: string;
  email: string;
  metodoPagamento: string;

  constructor(
    nome: string,
    cognome: string,
    email: string,
    metodoPagamento: string
  ) {
    this.nome = nome;
    this.cognome = cognome;
    this.email = email;
    this.metodoPagamento = metodoPagamento;
  }
  prenotaMezzo(mezzo: IMezzo): void {
    if (mezzo.stato === Stato.disponibile) {
      mezzo.stato = Stato.inUso;
      mezzo.assegnaUtente(this); 
    } else {
      console.log(`Il mezzo ${mezzo.idMezzo} che si vuole prenotare è attualmente ${mezzo.stato} presso altro utente, prego scegliere un mezzo disponibile.`);
    }
  }
}