"use script";

///Za domaci : Napraviti objekat koji ima ime, prezime, godine listu srecnih brojeva
// Napraviti funkciju koja ce da console.log('cao ja sam ime prezivam se prezime i imam godine, godina')
// Napraviti funkciju koja ce da vrati zbir 3 broja i da bude poruka Zbir broj1,bro2 i broj3 je jednak zbir.
// funkcija koja ce da vrati i console.log listu srecnih brojeva
// objekat ces napraviti iznad svega
// i return ide na kraj

const osoba = {
	ime: "Slobodan",
	prezime: "Bogdanovic",
	godine: 35,
	srecniBrojevi: [3, 6, 10, 12, 13],
};

function ispisiOsobu(osoba) {
	console.log(
		`Cao, ja se zovem ${osoba.ime} prezivam se ${osoba.prezime} i imam ${osoba.godine} godina.`
	);
}

function zbirBrojeva(broj1, broj2, broj3) {
	let zbir = broj1 + broj2 + broj3;
	console.log(`Zbir ${broj1} ${broj2} i ${broj3} je jednak ${zbir}.`);
	return zbir;
}

function listaSrecnihBrojeva() {
	console.log(osoba.srecniBrojevi);
	return osoba.srecniBrojevi;
}

ispisiOsobu(osoba);
const rezultatZbira = zbirBrojeva(10, 30, 60);
console.log(`Rezultat zbira je: ${rezultatZbira}`);
const listaSretnihBrojeva = listaSrecnihBrojeva();
console.log(`Lista sretnih brojeva: ${listaSretnihBrojeva}`);
