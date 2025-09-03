"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Salvo la variabile tipo di mezzo per recuperarla in base alla scelta dell'utente.
var mezzo;
//============================== FUNZIONE ==============================================
// Creo una funzione per generare un ID univoco per ogni mezzo
function IdMezzoUnivoco(idMezzo) {
    return Math.floor(Math.random() * 10000) + idMezzo; // Genera un ID univoco composto da un numero random + tipo di mezzo
}
// Salvo l'Id del mezzo generato nella variabile.
var idMezzo = "";
//================================= VARIABILI stato mezzo ===============================
// Definisco lo stato del mezzo creando una variabile che contenga il suo stato corrente
var stato = true || false; // Inizialmente il mezzo è disponibile
stato: true || false; // Lo stato può essere true o false
//================================= CLASSI ===================================
// Creo le classi per implementare le caratteristiche delle interfacce dei diversi mezzi
var bici = /** @class */ (function () {
    function bici() {
        this.tipoMezzo = "bici"; // Tipo di mezzo
        this.idMezzo = "".concat(Math.floor(Math.random() * 10000), " + ").concat(this.tipoMezzo); // Genera un ID univoco composto da un numero random + "bike"
        this.stato = true || false; // Inizialmente il mezzo
    }
    return bici;
}());
var scooter = /** @class */ (function () {
    function scooter() {
        this.tipoMezzo = "scooter";
        this.idMezzo = idMezzo + "scooter";
        this.tipoMezzo = "scooter"; // Tipo di mezzo
        this.idMezzo = "".concat(Math.floor(Math.random() * 10000), " + ").concat(this.tipoMezzo); // Genera un ID univoco composto da un numero random + "bike"
        this.stato = true || false; // Inizialmente il mezzo
    }
    return scooter;
}());
var monopattino = /** @class */ (function () {
    function monopattino() {
        this.tipoMezzo = "monopattino";
        this.idMezzo = idMezzo + "monopattino";
        this.tipoMezzo = "monopattino"; // Tipo di mezzo
        this.idMezzo = "".concat(Math.floor(Math.random() * 10000), " + ").concat(this.tipoMezzo); // Genera un ID univoco composto da un numero random + "bike"
        this.stato = true || false; // Inizialmente il mezzo
    }
    //============================== METODO ===============================
    // Creo un metodo per assegnare un mezzo ad un utente
    monopattino.prototype.assegnaUtente = function (utente) {
        if (!this.stato) {
            alert("Il mezzo non è disponibile.");
        }
        else if (this.stato) {
            this.stato = false; // Nel caso il mezzo non fosse disponibile
            console.log("Il mezzo ".concat(this.idMezzo, " non \u00E8 disponibile"));
        }
        else {
            this.stato = true; // Nel caso il mezzo fosse disponibile
            console.log("Il mezzo ".concat(this.idMezzo, " \u00E8 stato assegnato all'utente ").concat(utente.nome));
        }
    };
    return monopattino;
}());
