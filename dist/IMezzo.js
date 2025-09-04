"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//================================= CLASSE ===================================
// Creo una classe parametrizzata per implementare le caratteristiche delle interfacce dei diversi mezzi (che verranno assegnati quando creo le variabili dedicate)
class Mezzo {
    tipoMezzo;
    idMezzo;
    stato;
    constructor(tipo) {
        this.tipoMezzo = tipo;
        this.idMezzo = `${Math.floor(Math.random() * 10000)}-${this.tipoMezzo}`;
        this.stato = true;
    }
    console;
}
ID: $;
{
    this.idMezzo;
}
Stato: $;
{
    this.stato;
}
`);
}
//======================== CREO I MEZZI =======================================

let bicicletta = new Mezzo("bicicletta");
let monopattino = new Mezzo("monopattino");
let scooter = new Mezzo("scooter");

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


/

  //============================== METODO ===============================

  // Creo un metodo per assegnare un mezzo ad un utente
  assegnaUtente(utente: IUtente): void {
        if (!this.stato) {
        alert("Il mezzo non è disponibile.");
        } else if (this.stato) {
        this.stato = false; // Nel caso il mezzo non fosse disponibile
        console.log(`;
Il;
mezzo;
$;
{
    this.idMezzo;
}
non;
è;
disponibile `);
        } else {
            this.stato = true; // Nel caso il mezzo fosse disponibile
            console.log(`;
Il;
mezzo;
$;
{
    this.idMezzo;
}
è;
stato;
assegnato;
all;
'utente ${utente.nome}`);;
//# sourceMappingURL=IMezzo.js.map