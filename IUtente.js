"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.prenotaMezzo = prenotaMezzo;
var IUtente = ""; // Salvo la variabile utente per recuperarla in base alla registrazione dell'utente.
var utente = /** @class */ (function () {
    function utente() {
    }
    return utente;
}());
// Metodo per prenotare un mezzo
function prenotaMezzo() {
    if (this.stato == false) {
        console.log("Il mezzo con ID ".concat(this.idMezzo, " \u00E8 gi\u00E0 in uso."));
    }
    else if (this.stato == true) {
        console.log("Il mezzo con ID ".concat(this.idMezzo, " \u00E8 stato prenotato dall'utente ").concat(this.nome));
        this.stato = false; // Cambia lo stato del mezzo a non disponibile
    }
}
constructor(nome, string, eta, number);
{ // Costruttore della classe utente che richiede nome ed età come parametri obbligatori
    this.nome = nome;
    this.cognome = this.cognome;
    this.eta = eta;
    this.idUtente = Math.floor(Math.random() * 10000) + this.nome + this.cognome; // Genera un ID univoco formato da numero random + nome + cognome
    this.email = this.email;
    this.metodoDiPagamento = this.metodoDiPagamento;
}
function prenotaMezzo(mezzo) {
    console.log("L'utente ".concat(IUtente, " ha prenotato il mezzo con ID ").concat(mezzo.idMezzo));
}
