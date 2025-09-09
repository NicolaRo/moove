//======================== TEST =======================================

// File index di test  per verificare la corretta implementazione delle classe e delle interfacce

//======================== IMPORTO OGGETTI DAGLI ALTRI FILES =======================================

import { IMezzo } from "./IMezzo.js";
import { Utente } from "./IUtente.js"; 
import { Citta } from "./ICitta.js";
import { bicicletta } from "./IMezzo.js";
import { monopattino } from "./IMezzo.js"; 
import { scooter } from "./IMezzo.js";



//======================== IMPORTO L'UTENTE =======================================
import { utente1 } from "./IUtente.js";
import { utente2 } from "./IUtente.js";
import { utente3 } from "./IUtente.js";

// ======================== IMPORTO LE CITTÁ =======================================

import { milano,roma, torino, napoli, firenze, bologna, venezia, verona, genova, palermo, catania, bari, lecce, ancona, perugia, pescara, ferrara, trento, bolzano, catanzaro, parma} from "./ICitta.js";
import { mezziDisponibili } from "./IMezzo.js";


// ========================== AGGIUNGO I MEZZI DISPONIBILI ALLE CITTA =======================
// Includo console.log per debug
milano.aggiungiMezzo(monopattino);
milano.aggiungiMezzo(scooter);
milano.aggiungiMezzo(bicicletta);
/* console.log("Mezzi di Milano:", milano.mezziDisponibili); */ 

roma.aggiungiMezzo(monopattino);
roma.aggiungiMezzo(scooter);
roma.aggiungiMezzo(bicicletta);
/* console.log("Mezzi di Roma:", roma.mezziDisponibili); */

torino.aggiungiMezzo(monopattino);
torino.aggiungiMezzo(scooter);
torino.aggiungiMezzo(bicicletta);
/* console.log("Mezzi di Torino:", torino.mezziDisponibili); */

napoli.aggiungiMezzo(monopattino);
napoli.aggiungiMezzo(scooter);
napoli.aggiungiMezzo(bicicletta);
/* console.log("Mezzi di Napoli:", napoli.mezziDisponibili); */

firenze.aggiungiMezzo(monopattino);
firenze.aggiungiMezzo(scooter);
firenze.aggiungiMezzo(bicicletta);
/* console.log("Mezzi di Firenze:", firenze.mezziDisponibili); */

bologna.aggiungiMezzo(monopattino);
bologna.aggiungiMezzo(scooter);
bologna.aggiungiMezzo(bicicletta);
/* console.log("Mezzi di Bologna:", bologna.mezziDisponibili); */

venezia.aggiungiMezzo(monopattino);
venezia.aggiungiMezzo(scooter);
venezia.aggiungiMezzo(bicicletta);
/* console.log("Mezzi di Venezia:", venezia.mezziDisponibili); */

verona.aggiungiMezzo(monopattino);
verona.aggiungiMezzo(scooter);
verona.aggiungiMezzo(bicicletta);
/* console.log("Mezzi di Verona:", verona.mezziDisponibili); */

genova.aggiungiMezzo(monopattino);
genova.aggiungiMezzo(scooter);
genova.aggiungiMezzo(bicicletta);
/* console.log("Mezzi di Genova:", genova.mezziDisponibili); */

palermo.aggiungiMezzo(monopattino);
palermo.aggiungiMezzo(scooter);
palermo.aggiungiMezzo(bicicletta);
/* console.log("Mezzi di Milano:", milano.mezziDisponibili); */

catania.aggiungiMezzo(monopattino);
catania.aggiungiMezzo(scooter);
catania.aggiungiMezzo(bicicletta);
/* console.log("Mezzi di Catania:", catania.mezziDisponibili); */

bari.aggiungiMezzo(monopattino);
bari.aggiungiMezzo(scooter);
bari.aggiungiMezzo(bicicletta);
/* console.log("Mezzi di Bari:", bari.mezziDisponibili);
 */
lecce.aggiungiMezzo(monopattino);
lecce.aggiungiMezzo(scooter);
lecce.aggiungiMezzo(bicicletta);
/* console.log("Mezzi di Lecce:", lecce.mezziDisponibili); */

ancona.aggiungiMezzo(monopattino);
ancona.aggiungiMezzo(scooter);
ancona.aggiungiMezzo(bicicletta);
/* console.log("Mezzi di Ancona:", ancona.mezziDisponibili);
 */
perugia.aggiungiMezzo(monopattino);
perugia.aggiungiMezzo(scooter);
perugia.aggiungiMezzo(bicicletta);
/* console.log("Mezzi di Perugia:", perugia.mezziDisponibili); */

pescara.aggiungiMezzo(monopattino);
pescara.aggiungiMezzo(scooter);
pescara.aggiungiMezzo(bicicletta);
/* console.log("Mezzi di Pescara:", pescara.mezziDisponibili); */

ferrara.aggiungiMezzo(monopattino);
ferrara.aggiungiMezzo(scooter);
ferrara.aggiungiMezzo(bicicletta);
/* console.log("Mezzi di Ferrara:", ferrara.mezziDisponibili); */

trento.aggiungiMezzo(monopattino);
trento.aggiungiMezzo(scooter);
trento.aggiungiMezzo(bicicletta);
/* console.log("Mezzi di Trento:", trento.mezziDisponibili); */

bolzano.aggiungiMezzo(monopattino);
bolzano.aggiungiMezzo(scooter);
bolzano.aggiungiMezzo(bicicletta);
/* console.log("Mezzi di Bolzano:", bolzano.mezziDisponibili); */

catanzaro.aggiungiMezzo(monopattino);
catanzaro.aggiungiMezzo(scooter);
catanzaro.aggiungiMezzo(bicicletta);
/* console.log("Mezzi di Catanzaro:", catanzaro.mezziDisponibili); */

parma.aggiungiMezzo(monopattino);
parma.aggiungiMezzo(scooter);
parma.aggiungiMezzo(bicicletta);
/* console.log("Mezzi di Trento:", parma.mezziDisponibili);
 */

//======================== ASSEGNO L'UTENTE =======================================



/* 
bicicletta.assegnaUtente(utente1);
scooter.assegnaUtente(utente2);
monopattino.assegnaUtente(utente3); */
