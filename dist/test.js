//======================== TEST =======================================
import { bicicletta } from "./IMezzo.js";
import { monopattino } from "./IMezzo.js";
import { scooter } from "./IMezzo.js";
//======================== IMPORTO L'UTENTE =======================================
import { utente1 } from "./IUtente.js";
import { utente2 } from "./IUtente.js";
import { utente3 } from "./IUtente.js";
// ======================== IMPORTO LE CITTÁ =======================================
import { milano, } from "./ICitta.js";
milano.aggiungiMezzo(scooter);
milano.aggiungiMezzo(monopattino);
//======================== ASSEGNO L'UTENTE =======================================
bicicletta.assegnaUtente(utente1);
scooter.assegnaUtente(utente2);
monopattino.assegnaUtente(utente3);
//# sourceMappingURL=test.js.map