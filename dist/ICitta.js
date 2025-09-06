// ========================= CREO LA CLASSE PER LE CITTÁ =======================================
export class Citta {
    constructor() {
        this.nomeCitta = "Milano";
        this.mezziDisponibili = [];
    }
    aggiungiMezzo(mezzo) {
        if (mezzo.statoMezzo === true) {
            console.log("in", this.nomeCitta, "sono disponibili", this.mezziDisponibili);
        }
        else {
            mezzo.statoMezzo = false;
            console.log("Il mezzo", mezzo.idMezzo, "non è disponibile");
        }
    }
}
//======================== CREO LA CITTÁ =======================================
export let milano = new Citta();
export let roma = new Citta();
export let torino = new Citta();
export let napoli = new Citta();
export let firenze = new Citta();
export let bologna = new Citta();
export let venezia = new Citta();
export let verona = new Citta();
export let genova = new Citta();
export let palermo = new Citta();
export let catania = new Citta();
export let bari = new Citta();
export let lecce = new Citta();
export let ancona = new Citta();
export let perugia = new Citta();
export let pescara = new Citta();
export let ferrara = new Citta();
export let trento = new Citta();
export let bolzano = new Citta();
export let catanzaro = new Citta();
export let reggioCalabria = new Citta();
console.log("le città di:", (milano.nomeCitta), (roma.nomeCitta), (torino.nomeCitta), (napoli.nomeCitta), (firenze.nomeCitta), (bologna.nomeCitta), (venezia.nomeCitta), (verona.nomeCitta), (genova.nomeCitta), (palermo.nomeCitta), (catania.nomeCitta), (bari.nomeCitta), (lecce.nomeCitta), (ancona.nomeCitta), (perugia.nomeCitta), (ferrara.nomeCitta), (trento.nomeCitta), (bolzano.nomeCitta), (catanzaro.nomeCitta), (reggioCalabria.nomeCitta), "è stata creata");
//# sourceMappingURL=ICitta.js.map