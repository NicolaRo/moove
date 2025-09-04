//======================== IMPORTO LE INTERFACCE ESTERNE =======================================
import(Utente[]);
from;
"./IUtente";
//================================= CLASSE ===================================
// Creo una classe parametrizzata per implementare le caratteristiche delle interfacce dei diversi mezzi (che verranno assegnati quando creo le variabili dedicate)
export class Mezzo {
    constructor(tipo) {
        Mezzo.contatore++;
        this.tipoMezzo = tipo;
        this.idMezzo = `${tipo}-${Mezzo.contatore.toString().padStart(3, '0')}`;
        this.stato = true;
        console.log("Mezzo creato:", this);
    }
}
Mezzo.contatore = 0;
{
    return alert;
    "il mezzo:";
    $;
    {
        Mezzo;
    }
    "è stato assegnato a:";
    $;
    {
        utente;
    }
    ;
}
//======================== CREO I MEZZI =======================================
let bicicletta = new Mezzo("bicicletta");
let monopattino = new Mezzo("monopattino");
let scooter = new Mezzo("scooter");
//======================== ASSEGNO L'UTENTE =======================================
//======================== IMPORTO L'UTENTE =======================================
//# sourceMappingURL=IMezzo.js.map