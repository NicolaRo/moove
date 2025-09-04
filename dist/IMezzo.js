"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Salvo la variabile tipo di mezzo per recuperarla in base alla scelta dell'utente.
let mezzo;
//============================== FUNZIONE ==============================================
// Creo una funzione per generare un ID univoco per ogni mezzo
function IdMezzoUnivoco(idMezzo) {
    return Math.floor(Math.random() * 10000) + idMezzo; // Genera un ID univoco composto da un numero random + tipo di mezzo
}
// Salvo l'Id del mezzo generato nella variabile.
let idMezzo = "";
//================================= VARIABILI stato mezzo ===============================
// Definisco lo stato del mezzo creando una variabile che contenga il suo stato corrente
let stato = true || false; // Inizialmente il mezzo è disponibile
stato: true || false; // Lo stato può essere true o false
//================================= CLASSI ===================================
// Creo le classi per implementare le caratteristiche delle interfacce dei diversi mezzi
class bici {
    tipoMezzo;
    idMezzo;
    stato;
    constructor() {
        this.tipoMezzo = "bici"; // Tipo di mezzo
        this.idMezzo = `${Math.floor(Math.random() * 10000)}-${this.tipoMezzo}`; // Genera un ID univoco composto da un numero random + "bike"
        this.stato = true || false; // Inizialmente il mezzo
    }
}
class scooter {
    tipoMezzo = "scooter";
    idMezzo = idMezzo + "scooter";
    stato;
    constructor() {
        this.tipoMezzo = "scooter"; // Tipo di mezzo
        this.idMezzo = `${Math.floor(Math.random() * 10000)} + ${this.tipoMezzo}`; // Genera un ID univoco composto da un numero random + "bike"
        this.stato = true || false; // Inizialmente il mezzo
    }
}
class monopattino {
    tipoMezzo = "monopattino";
    idMezzo = idMezzo + "monopattino";
    stato;
    constructor() {
        this.tipoMezzo = "monopattino"; // Tipo di mezzo
        this.idMezzo = `${Math.floor(Math.random() * 10000)} + ${this.tipoMezzo}`; // Genera un ID univoco composto da un numero random + "bike"
        this.stato = true || false; // Inizialmente il mezzo
    }
    //============================== METODO ===============================
    // Creo un metodo per assegnare un mezzo ad un utente
    assegnaUtente(utente) {
        if (!this.stato) {
            alert("Il mezzo non è disponibile.");
        }
        else if (this.stato) {
            this.stato = false; // Nel caso il mezzo non fosse disponibile
            console.log(`Il mezzo ${this.idMezzo} non è disponibile`);
        }
        else {
            this.stato = true; // Nel caso il mezzo fosse disponibile
            console.log(`Il mezzo ${this.idMezzo} è stato assegnato all'utente ${utente.nome}`);
        }
    }
}
//# sourceMappingURL=IMezzo.js.map