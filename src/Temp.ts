//===== DICHIARO ENUM =======
//Assegnando diversi valori alla proprietà "stato" sarà più semplice integrare altri valori in futuro.

enum Stato {
  disponibile = "disponibile",
  //inManutenzione,
  inUso = "In uso",
  //fuoriServizio
}

//=== INTERFACCIA MEZZO ===
// Definisco l'interfaccia IMezzo per gestire i diversi mezzi noleggiabili.
//Elenco le proprietà di ciascun mezzo (quelle proprie e condivise da tutti i mezzi).

interface IMezzo {
  tipoMezzo: string; // "bici", "scooter", "monopattino".
  idMezzo: string; // ID univoco formato da numero progressivo + tipo di mezzo.
  stato: Stato; // Prende il valore assegnato dentro all'enum.
  assegnaUtente(utente: IUtente): void;
}

//=== CLASSE MEZZO ===
// Creo una classe parametrizzata per implementare le caratteristiche delle interfacce dei diversi mezzi.

class Mezzo implements IMezzo {
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
  // === ASSEGNO UN MEZZO A CIASCUN UTENTE ===
  assegnaUtente(Utente: IUtente): void {
    // Il mezzo è "disponibile" di default.
    if (this.stato === Stato.disponibile) {
      this.stato = Stato.inUso;
    }
  }
}

//===== CREO I MEZZI =====

let bicicletta = new Mezzo("bicicletta");
let monopattino = new Mezzo("monopattino");
let scooter = new Mezzo("scooter");

//=== CREO FLOTTA DEI MEZZI DISPONIBILI ===

let mezziDisponibili: IMezzo[] = [bicicletta, monopattino, scooter];

//=== FUNZIONE GENERICA MEZZI DISPONIBILI ===

function stampaMezzi(citta: Citta) {
  let righe: string[] = [];
  for (const m of citta.mezziDisponibili) {
    righe.push(`${m.idMezzo} - ${m.stato}`);
  }
  console.log(
    "I mezzi ora disponibili nella città di:",
    citta.nomeCitta,
    "\n",
    righe.join("\n")
  );
}

//=== INTERFACCIA UTENTE ===

interface IUtente {
  nome: string;
  cognome: string;
  email: string;
  metodoPagamento: string; // "carta di credito", "paypal", "apple pay"
}

//=== CREO LA CLASSE PER L'UTENTE' ===
// Creo una classe parametrizzata per implementare le caratteristiche delle interfacce dei diversi mezzi (che verranno assegnati quando creo le variabili dedicate)

class Utente implements IUtente {
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
      /* mezzo.stato = Stato.inUso; */
      mezzo.assegnaUtente(this);
    } else {
      console.log(
        `Il mezzo ${mezzo.idMezzo} che si vuole prenotare è attualmente ${mezzo.stato} presso altro utente, prego scegliere un mezzo disponibile.`
      );
    }
  }
}

//=== CREO L'UTENTE ===

let utente1 = new Utente(
  "Mario",
  "Rossi",
  "mario@email.com",
  "carta di credito"
);

let utente2 = new Utente("Francesco", "Gallo", "f.gallo@email.com", "paypal");

let utente3 = new Utente(
  "Giovanni",
  "Renesto",
  "gionesto@email.com",
  "apple pay"
);

console.log(
  "gli utenti:",
  utente1.nome,
  utente1.cognome,
  ",",
  utente2.nome,
  utente2.cognome,
  ",",
  utente3.nome,
  utente3.cognome,
  "sono stati aggiunti"
);

//=== CREO L'INTERFACCIA PER LE CITTÀ ===

interface ICitta {
  nomeCitta: string;
  mezziDisponibili: IMezzo[];
}

// === CREO LA CLASSE PER LE CITTÁ ===

class Citta implements ICitta {
  nomeCitta: string;
  mezziDisponibili: IMezzo[];

  constructor(nomeCitta: string, mezziDisponibili: IMezzo[] = []) {
    this.nomeCitta = nomeCitta;
    this.mezziDisponibili = mezziDisponibili;
  }

  aggiungiMezzo(mezzo: IMezzo): void {
    let mezziDisponibili = this.mezziDisponibili;
    this.mezziDisponibili.push(mezzo);
  }
}
//=== CREO LE CITTÁ ===

let milano = new Citta("Milano");
let roma = new Citta("Roma");
let torino = new Citta("Torino");
let napoli = new Citta("Napoli");
let firenze = new Citta("Firenze");
let bologna = new Citta("Bologna");
let venezia = new Citta("Venezia");
let verona = new Citta("Verona");
let genova = new Citta("Genova");
let palermo = new Citta("Palermo");
let catania = new Citta("Catania");
let bari = new Citta("Bari");
let lecce = new Citta("Lecce");
let ancona = new Citta("Ancona");
let perugia = new Citta("Perugia");
let pescara = new Citta("Pescara");
let ferrara = new Citta("Ferrara");
let trento = new Citta("Trento");
let bolzano = new Citta("Bolzano");
let parma = new Citta("Parma");

//=== AGGIUNGO I MEZZI DISPONIBILI ALLE CITTA ===

//Creo i mezzi in ciascuna città:
let milanoBici = new Mezzo("bicicletta");
let milanoScooter = new Mezzo("scooter");
let milanoMono = new Mezzo("monopattino");
//Una volta creati li aggiungo a ciascuna città
milano.aggiungiMezzo(milanoBici);
milano.aggiungiMezzo(milanoMono);
milano.aggiungiMezzo(milanoScooter);

let romaBici = new Mezzo("bicicletta");
let romaScooter = new Mezzo("scooter");
let romaMono = new Mezzo("monopattino");
roma.aggiungiMezzo(romaBici);
roma.aggiungiMezzo(romaMono);
roma.aggiungiMezzo(romaScooter);

let torinoBici = new Mezzo("bicicletta");
let torinoScooter = new Mezzo("scooter");
let torinoMono = new Mezzo("monopattino");
torino.aggiungiMezzo(torinoBici);
torino.aggiungiMezzo(torinoScooter);
torino.aggiungiMezzo(torinoMono);

let napoliBici = new Mezzo("bicicletta");
let napoliScooter = new Mezzo("scooter");
let napoliMono = new Mezzo("monopattino");
napoli.aggiungiMezzo(napoliBici);
napoli.aggiungiMezzo(napoliScooter);
napoli.aggiungiMezzo(napoliMono);

let firenzeBici = new Mezzo("bicicletta");
let firenzeScooter = new Mezzo("scooter");
let firenzeMono = new Mezzo("monopattino");
firenze.aggiungiMezzo(firenzeBici);
firenze.aggiungiMezzo(firenzeScooter);
firenze.aggiungiMezzo(firenzeMono);

let bolognaBici = new Mezzo("bicicletta");
let bolognaScooter = new Mezzo("scooter");
let bolognaMono = new Mezzo("monopattino");
bologna.aggiungiMezzo(bolognaBici);
bologna.aggiungiMezzo(bolognaMono);
bologna.aggiungiMezzo(bolognaScooter);

let veneziaBici = new Mezzo("bicicletta");
let veneziaScooter = new Mezzo("scooter");
let veneziaMono = new Mezzo("monopattino");
venezia.aggiungiMezzo(veneziaBici);
venezia.aggiungiMezzo(veneziaScooter);
venezia.aggiungiMezzo(veneziaMono);

let veronaBici = new Mezzo("bicicletta");
let veronaScooter = new Mezzo("scooter");
let veronaMono = new Mezzo("monopattino");
verona.aggiungiMezzo(veronaBici);
verona.aggiungiMezzo(veronaScooter);
verona.aggiungiMezzo(veronaMono);

let genovaBici = new Mezzo("bicicletta");
let genovaScooter = new Mezzo("scooter");
let genovaMono = new Mezzo("monopattino");
genova.aggiungiMezzo(genovaBici);
genova.aggiungiMezzo(genovaScooter);
genova.aggiungiMezzo(genovaMono);

let palermoBici = new Mezzo("bicicletta");
let palermoScooter = new Mezzo("scooter");
let palermoMono = new Mezzo("monopattino");
palermo.aggiungiMezzo(palermoBici);
palermo.aggiungiMezzo(palermoScooter);
palermo.aggiungiMezzo(palermoMono);

let cataniaBici = new Mezzo("bicicletta");
let cataniaScooter = new Mezzo("scooter");
let cataniaMono = new Mezzo("monopattino");
catania.aggiungiMezzo(cataniaBici);
catania.aggiungiMezzo(cataniaScooter);
catania.aggiungiMezzo(cataniaMono);

let bariBici = new Mezzo("bicicletta");
let bariScooter = new Mezzo("scooter");
let bariMono = new Mezzo("monopattino");
bari.aggiungiMezzo(bariBici);
bari.aggiungiMezzo(bariScooter);
bari.aggiungiMezzo(bariMono);

let lecceBici = new Mezzo("bicicletta");
let lecceScooter = new Mezzo("scooter");
let lecceMono = new Mezzo("monopattino");
lecce.aggiungiMezzo(lecceBici);
lecce.aggiungiMezzo(lecceScooter);
lecce.aggiungiMezzo(lecceMono);

let anconaBici = new Mezzo("bicicletta");
let anconaScooter = new Mezzo("scooter");
let anconaMono = new Mezzo("monopattino");
ancona.aggiungiMezzo(anconaBici);
ancona.aggiungiMezzo(anconaScooter);
ancona.aggiungiMezzo(anconaMono);

let perugiaBici = new Mezzo("bicicletta");
let perugiaScooter = new Mezzo("scooter");
let perugiaMono = new Mezzo("monopattino");
perugia.aggiungiMezzo(perugiaBici);
perugia.aggiungiMezzo(perugiaScooter);
perugia.aggiungiMezzo(perugiaMono);

let pescaraBici = new Mezzo("bicicletta");
let pescaraScooter = new Mezzo("scooter");
let pescaraMono = new Mezzo("monopattino");
pescara.aggiungiMezzo(pescaraBici);
pescara.aggiungiMezzo(pescaraScooter);
pescara.aggiungiMezzo(pescaraMono);

let ferraraBici = new Mezzo("bicicletta");
let ferraraScooter = new Mezzo("scooter");
let ferraraMono = new Mezzo("monopattino");
ferrara.aggiungiMezzo(ferraraBici);
ferrara.aggiungiMezzo(ferraraScooter);
ferrara.aggiungiMezzo(ferraraMono);

let trentoBici = new Mezzo("bicicletta");
let trentoScooter = new Mezzo("scooter");
let trentoMono = new Mezzo("monopattino");
trento.aggiungiMezzo(trentoBici);
trento.aggiungiMezzo(trentoScooter);
trento.aggiungiMezzo(trentoMono);

let bolzanoBici = new Mezzo("bicicletta");
let bolzanoScooter = new Mezzo("scooter");
let bolzanoMono = new Mezzo("monopattino");
bolzano.aggiungiMezzo(bolzanoBici);
bolzano.aggiungiMezzo(bolzanoScooter);
bolzano.aggiungiMezzo(bolzanoMono);

let parmaBici = new Mezzo("bicicletta");
let parmaScooter = new Mezzo("scooter");
let parmaMono = new Mezzo("monopattino");
parma.aggiungiMezzo(parmaBici);
parma.aggiungiMezzo(parmaScooter);
parma.aggiungiMezzo(parmaMono);

console.log(
    "Moove è presente a", milano.nomeCitta,
    "con questi mezzi:\n",
    milano.mezziDisponibili.map(m => `${m.idMezzo} - ${m.stato}`).join("\n"), ",",
    roma.nomeCitta,
    "con questi mezzi:\n",
    roma.mezziDisponibili.map(m => `${m.idMezzo} - ${m.stato}`).join("\n"), ",",
    torino.nomeCitta,
    "con questi mezzi:\n",
    torino.mezziDisponibili.map(m => `${m.idMezzo} - ${m.stato}`).join("\n"), ",",
    napoli.nomeCitta,
    "con questi mezzi:\n",
    napoli.mezziDisponibili.map(m => `${m.idMezzo} - ${m.stato}`).join("\n"), ",",
    firenze.nomeCitta,
    "con questi mezzi:\n",
    firenze.mezziDisponibili.map(m => `${m.idMezzo} - ${m.stato}`).join("\n"), ",",
    parma.nomeCitta,
    "con questi mezzi:\n",
    parma.mezziDisponibili.map(m => `${m.idMezzo} - ${m.stato}`).join("\n"), ",",
    bologna.nomeCitta,
    "con questi mezzi:\n",
    bologna.mezziDisponibili.map(m => `${m.idMezzo} - ${m.stato}`).join("\n"), ",",
    ferrara.nomeCitta,
    "con questi mezzi:\n",
    ferrara.mezziDisponibili.map(m => `${m.idMezzo} - ${m.stato}`).join("\n"), ",",
    venezia.nomeCitta,
    "con questi mezzi:\n",
    venezia.mezziDisponibili.map(m => `${m.idMezzo} - ${m.stato}`).join("\n"), ",",
    verona.nomeCitta,
    "con questi mezzi:\n",
    verona.mezziDisponibili.map(m => `${m.idMezzo} - ${m.stato}`).join("\n"), ",",
    genova.nomeCitta,
    "con questi mezzi:\n",
    genova.mezziDisponibili.map(m => `${m.idMezzo} - ${m.stato}`).join("\n"), ",",
    palermo.nomeCitta,
    "con questi mezzi:\n",
    palermo.mezziDisponibili.map(m => `${m.idMezzo} - ${m.stato}`).join("\n"), ",",
    catania.nomeCitta,
    "con questi mezzi:\n",
    catania.mezziDisponibili.map(m => `${m.idMezzo} - ${m.stato}`).join("\n"), ",",
    bari.nomeCitta,
    "con questi mezzi:\n",
    bari.mezziDisponibili.map(m => `${m.idMezzo} - ${m.stato}`).join("\n"), ",",
    lecce.nomeCitta,
    "con questi mezzi:\n",
    lecce.mezziDisponibili.map(m => `${m.idMezzo} - ${m.stato}`).join("\n"), ",",
    ancona.nomeCitta,
    "con questi mezzi:\n",
    ancona.mezziDisponibili.map(m => `${m.idMezzo} - ${m.stato}`).join("\n"), ",",
    perugia.nomeCitta,
    "con questi mezzi:\n",
    ancona.mezziDisponibili.map(m => `${m.idMezzo} - ${m.stato}`).join("\n"), ",",
    perugia.nomeCitta,
    "con questi mezzi:\n",
    perugia.mezziDisponibili.map(m => `${m.idMezzo} - ${m.stato}`).join("\n"), ",",
    pescara.nomeCitta,
    "con questi mezzi:\n",
    pescara.mezziDisponibili.map(m => `${m.idMezzo} - ${m.stato}`).join("\n"), ",",
    trento.nomeCitta,
    "con questi mezzi:\n",
    trento.mezziDisponibili.map(m => `${m.idMezzo} - ${m.stato}`).join("\n"), ",",
    bolzano.nomeCitta,
    "con questi mezzi:\n",
    bolzano.mezziDisponibili.map(m => `${m.idMezzo} - ${m.stato}`).join("\n"), ",",
);

//=== TEST AGGIUNGO UN MEZZO AD UNA CITTÀ ===

console.log(
  "Il mezzo:",
  (() => {
    const m = new Mezzo("bicicletta");
    milano.aggiungiMezzo(m);
    return m.idMezzo;
  })(),
  "è stato aggiunto alla città di:",
  milano.nomeCitta
);

// Verifico la disponibilità dei mezzi aggiornata
milano.mezziDisponibili;
console.log("I mezzi ora assegnatti alla città di:", milano.nomeCitta,
    "con questi mezzi:\n",
    milano.mezziDisponibili.map(m => `${m.idMezzo} - ${m.stato}`).join("\n"), ",",)


//=== TEST PRENOTAZIONE MEZZO PER UN UTENTE ===
// Utente 1 prenota il mezzo..
utente1.prenotaMezzo(ferraraBici);

// Se il mezzo è disponibile cambierà di stato e verrà assegnato all'utente.
if (ferraraBici.stato === Stato.inUso) {
  console.log(
    `Il cliente ${utente1.nome} ${utente1.cognome} ha prenotato il mezzo ${ferraraBici.idMezzo}`
  );
  console.log(
    `Il mezzo ${ferraraBici.idMezzo} è stato assegnato all'utente ${utente1.nome} ${utente1.cognome}`
  );
  console.log(
    `Il mezzo', ${ferraraBici.idMezzo} "è attualmente", ${ferraraBici.stato}`
  );
} else {
  console.log(`L'utente:
    ${utente2.nome}, ${utente2.cognome},
    vuole prenotare: ${ferraraBici.idMezzo}.
    Questo mezzo non è disponibile, si prega di scegliere un altro mezzo.`);
}

//=== TEST PRENOTAZIONE SU MEZZO NON DISPONIBILE ===
// Utente 2 vuole prenotare lo stesso mezzo..
utente2.prenotaMezzo(ferraraBici);
