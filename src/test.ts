//======================== TEST =======================================

// File di test  per verificare la corretta implementazione delle classe e delle interfacce

//======================== IMPORTO LE INTERFACCE DAGLI ALTRI FILES =======================================

import { bicicletta, IMezzo, mezziDisponibili } from "./IMezzo.js";
import { IUtente } from "./IUtente.js"
import { ICitta } from "./ICitta.js";

//======================= IMPORTO MEZZO ================

import {Mezzo,} from "./IMezzo.js"

//======================== IMPORTO GLI UTENTI =======================================
import { utente1 } from "./IUtente.js";
import { utente2 } from "./IUtente.js";
import { utente3 } from "./IUtente.js";
import { Utente } from  "./IUtente.js"


// ======================== IMPORTO LE CITTÁ =======================================

import { milano, roma, torino, napoli, firenze,bologna, venezia, verona, genova, palermo, catania, bari, lecce, ancona, perugia, pescara, ferrara, trento, bolzano, parma, } from "./ICitta.js"

// ========================== AGGIUNGO I MEZZI DISPONIBILI ALLE CITTA =======================

//Creo i mezzi in ciascuna città:
let milanoBici = new Mezzo("bicicletta");
let milanoScooter = new Mezzo ("scooter");
let milanoMono = new Mezzo ("monopattino");
//Una volta creati li aggiungo a ciascuna città
milano.aggiungiMezzo(milanoBici);
milano.aggiungiMezzo(milanoMono); 
milano.aggiungiMezzo(milanoScooter);


let romaBici = new Mezzo("bicicletta");
let romaScooter = new Mezzo ("scooter");
let romaMono = new Mezzo ("monopattino");
roma.aggiungiMezzo(romaBici);
roma.aggiungiMezzo(romaMono); 
roma.aggiungiMezzo(romaScooter);


let torinoBici = new Mezzo("bicicletta");
let torinoScooter = new Mezzo ("scooter");
let torinoMono = new Mezzo ("monopattino");
torino.aggiungiMezzo(torinoBici);
torino.aggiungiMezzo(torinoScooter);
torino.aggiungiMezzo(torinoMono);


let napoliBici = new Mezzo("bicicletta");
let napoliScooter = new Mezzo ("scooter");
let napoliMono = new Mezzo ("monopattino");
napoli.aggiungiMezzo(napoliBici);
napoli.aggiungiMezzo(napoliScooter);
napoli.aggiungiMezzo(napoliMono);



let firenzeBici = new Mezzo("bicicletta");
let firenzeScooter = new Mezzo ("scooter");
let firenzeMono = new Mezzo ("monopattino");
firenze.aggiungiMezzo(firenzeBici);
firenze.aggiungiMezzo(firenzeScooter);
firenze.aggiungiMezzo(firenzeMono);


let bolognaBici = new Mezzo("bicicletta");
let bolognaScooter = new Mezzo ("scooter");
let bolognaMono = new Mezzo ("monopattino");
bologna.aggiungiMezzo(bolognaBici);
bologna.aggiungiMezzo(bolognaMono);
bologna.aggiungiMezzo(bolognaScooter);


let veneziaBici = new Mezzo("bicicletta");
let veneziaScooter = new Mezzo ("scooter");
let veneziaMono = new Mezzo ("monopattino");
venezia.aggiungiMezzo(veneziaBici);
venezia.aggiungiMezzo(veneziaScooter);
venezia.aggiungiMezzo(veneziaMono);


let veronaBici = new Mezzo("bicicletta");
let veronaScooter = new Mezzo ("scooter");
let veronaMono = new Mezzo ("monopattino");
verona.aggiungiMezzo(veronaBici);
verona.aggiungiMezzo(veronaScooter); 
verona.aggiungiMezzo(veronaMono);


let genovaBici = new Mezzo("bicicletta");
let genovaScooter = new Mezzo ("scooter");
let genovaMono = new Mezzo ("monopattino");
genova.aggiungiMezzo(genovaBici);
genova.aggiungiMezzo(genovaScooter);
genova.aggiungiMezzo(genovaMono);


let palermoBici = new Mezzo("bicicletta");
let palermoScooter = new Mezzo ("scooter");
let palermoMono = new Mezzo ("monopattino");
palermo.aggiungiMezzo(palermoBici);
palermo.aggiungiMezzo(palermoScooter);
palermo.aggiungiMezzo(palermoMono);


let cataniaBici = new Mezzo("bicicletta");
let cataniaScooter = new Mezzo ("scooter");
let cataniaMono = new Mezzo ("monopattino");
catania.aggiungiMezzo(cataniaBici);
catania.aggiungiMezzo(cataniaScooter); 
catania.aggiungiMezzo(cataniaMono);



let bariBici = new Mezzo("bicicletta");
let bariScooter = new Mezzo ("scooter");
let bariMono = new Mezzo ("monopattino");
bari.aggiungiMezzo(bariBici);
bari.aggiungiMezzo(bariScooter);
bari.aggiungiMezzo(bariMono);


let lecceBici = new Mezzo("bicicletta");
let lecceScooter = new Mezzo ("scooter");
let lecceMono = new Mezzo ("monopattino");
lecce.aggiungiMezzo(lecceBici);
lecce.aggiungiMezzo(lecceScooter);
lecce.aggiungiMezzo(lecceMono);


let anconaBici = new Mezzo("bicicletta");
let anconaScooter = new Mezzo ("scooter");
let anconaMono = new Mezzo ("monopattino");
ancona.aggiungiMezzo(anconaBici);
ancona.aggiungiMezzo(anconaScooter);
ancona.aggiungiMezzo(anconaMono);


let perugiaBici = new Mezzo("bicicletta");
let perugiaScooter = new Mezzo ("scooter");
let perugiaMono = new Mezzo ("monopattino");
perugia.aggiungiMezzo(perugiaBici);
perugia.aggiungiMezzo(perugiaScooter);
perugia.aggiungiMezzo(perugiaMono);


let pescaraBici = new Mezzo("bicicletta");
let pescaraScooter = new Mezzo ("scooter");
let pescaraMono = new Mezzo ("monopattino");
pescara.aggiungiMezzo(pescaraBici);
pescara.aggiungiMezzo(pescaraScooter);
pescara.aggiungiMezzo(pescaraMono);


let ferraraBici = new Mezzo("bicicletta");
let ferraraScooter = new Mezzo ("scooter");
let ferraraMono = new Mezzo ("monopattino");
ferrara.aggiungiMezzo(ferraraBici);
ferrara.aggiungiMezzo(ferraraScooter);
ferrara.aggiungiMezzo(ferraraMono);


let trentoBici = new Mezzo("bicicletta");
let trentoScooter = new Mezzo ("scooter");
let trentoMono = new Mezzo ("monopattino");
trento.aggiungiMezzo(trentoBici); 
trento.aggiungiMezzo(trentoScooter);
trento.aggiungiMezzo(trentoMono);


let bolzanoBici = new Mezzo("bicicletta");
let bolzanoScooter = new Mezzo ("scooter");
let bolzanoMono = new Mezzo ("monopattino");
bolzano.aggiungiMezzo(bolzanoBici);
bolzano.aggiungiMezzo(bolzanoScooter);
bolzano.aggiungiMezzo(bolzanoMono);


let parmaBici = new Mezzo("bicicletta");
let parmaScooter = new Mezzo ("scooter");
let parmaMono = new Mezzo ("monopattino");
parma.aggiungiMezzo(parmaBici);
parma.aggiungiMezzo(parmaScooter);
parma.aggiungiMezzo(parmaMono);


//======================== TEST ASSEGNAZIONE UTENTE =======================================

milanoScooter.assegnaUtente(utente1)
romaMono.assegnaUtente(utente2)
ferraraBici.assegnaUtente(utente3)

//================= TEST PRENOTAZIONE MEZZO PER UN UTENTE =====================

utente1.prenotaMezzo(milanoMono)
console.log("il cliente", utente1, "ha prenotato", milanoMono);


// =============== TEST PRENOTAZIONE SU MEZZO NON DISPONIBILE ================
utente2.prenotaMezzo(milanoMono)
// Quando viene eseguito lo snippet, console log ritorna il messaggio "non disponibile" impostato nel metodo "prenotaMezzo"

// =============== TEST AGGIUNTA MEZZO  ================
milano.aggiungiMezzo;
new Mezzo("bicicletta");
console.log ("il mezzo:", bicicletta, "è stato aggiunto alla città di:", milano)