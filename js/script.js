let chilometri = prompt("chilometri da percorrere:", "scrivi quanti chilometri dovrai percorrere");
let eta = prompt("Età", "scrivi quanti anni hai");
let prezzoTotale = Math.round((chilometri * 0.21));

let prezzoComplessivo = document.getElementById("prezzo_complessivo");
let outputPrezzoScontato = document.getElementById("prezzo_scontato");

prezzoComplessivo.innerHTML = prezzoTotale;

let prezzoMinorenni = (prezzoTotale - prezzoTotale / 100 * 20);
let prezzoAnziani = (prezzoTotale - prezzoTotale / 100 * 40)



if (eta < 18) {
    outputPrezzoScontato.innerHTML = prezzoMinorenni;
} else if (eta > 65) {
    outputPrezzoScontato.innerHTML = prezzoAnziani
} else {
    outputPrezzoScontato.innerHTML = prezzoTotale
}