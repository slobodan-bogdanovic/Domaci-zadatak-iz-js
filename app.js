"use script";

///Za domaci : Napraviti objekat koji ima ime, prezime, godine listu srecnih brojeva
// Napraviti funkciju koja ce da console.log('cao ja sam ime prezivam se prezime i imam godine, godina')
// Napraviti funkciju koja ce da vrati zbir 3 broja i da bude poruka Zbir broj1,bro2 i broj3 je jednak zbir.
// funkcija koja ce da vrati i console.log listu srecnih brojeva
// objekat ces napraviti iznad svega
// i return ide na kraj

// const osoba = {
// 	ime: "Slobodan",
// 	prezime: "Bogdanovic",
// 	godine: 35,
// 	srecniBrojevi: [3, 6, 10, 12, 13],
// };

// function ispisiOsobu(korisnik) {
// 	console.log(
// 		`Cao, ja se zovem ${korisnik.ime} prezivam se ${korisnik.prezime} i imam ${korisnik.godine} godina.`
// 	);
// }

// function zbirBrojeva(broj1, broj2, broj3) {
// 	let zbir = broj1 + broj2 + broj3;
// 	console.log(`Zbir ${broj1} ${broj2} i ${broj3} je jednak ${zbir}.`);
// 	return zbir;
// }

// function listaSrecnihBrojeva() {
// 	console.log(osoba.srecniBrojevi);
// 	return osoba.srecniBrojevi.join(`-`);
// }

// ispisiOsobu(osoba);
// const rezultatZbira = zbirBrojeva(
// 	osoba.srecniBrojevi[2],
// 	osoba.srecniBrojevi[3],
// 	osoba.srecniBrojevi[0]
// );
// console.log(`Rezultat zbira je: ${rezultatZbira}`);
// console.log(`Lista srecnih brojeva: ${listaSrecnihBrojeva()}`);

// zadak domaci. Napraviti funkciju koja vraca poruke da li je broj paran i nije, pri tome gledaj da bude poruka i ako je nula
//Kako mozemo da ispitamo da li je broj paran ili ne? Radili smo % ostatak? Znaci ako se podeli sa broj%2 a ostatak je 0 to znaci da je broj paran. U slucaju da ostatak nije nula onda je broj neparan. Imaj u vidu da stavis i uslov ako je broj nula...

// function brojParNepar(broj) {
// 	if (broj === 0) {
// 		return `broj je 0`;
// 	} else if (broj % 2 === 0) {
// 		return `broj je paran`;
// 	} else {
// 		return `broj je neparan`;
// 	}
// }
// let Rezultat = brojParNepar(7);
// console.log(Rezultat);

//napravit funkciju koja ce da prima 2 argumenta, prvi argument ce biti da li je korisnik polozio tipovanje (znace bice boolean vrednost true ili false) a druga vrednost ce biti broj godina. funkcija ce da ispituje da li je korisnik adekvatan kandidat za polaganje voznje. Ako je korisnip polozio tipovanje i ima vise ili jednako 18 godina onda mozemo console log korisnik moze da polaze ispit. Ako korisnik nije polozio tipovanje ili nema dovolno godina mozemo da napisemo poruku 'korisnik nije ispunio uslove za polaganje'
//bonus!!!ako slobo zavrsi sve ovo i bude besan, moze dodati koji je to razlog sto ne moze da polaze voznju

// function daLiKorisnikImaUslovZaPolaganje(polozioTipovanje, brojGodina) {
// 	if (polozioTipovanje === true && brojGodina >= 18) {
// 		console.log(`Korisnik moze da polaze ispit`);
// 	} else {
// 		console.log(`Korisnik nije ispunio uslove za polaganje`);
// 	}
// }
// daLiKorisnikImaUslovZaPolaganje(true, 27);

///napraviti niz 5 objekata. svaki objekat bi trebao da sadrzi ime,prezime,godine, pol i id.
///Sa metodom filter ces prvo izvuci sve clanove koji su zenski.
///Sa metodom find ces izvuci korisnika koji ima id 4
///Sa metodom forEach ces console.log(Sva imena iz objekata)
/// sa petljom  for (obicnom) ces proci za svaki objekat iz niza i napisati poruku "'Osoba ime' je 'pol' i id osobe je 'id'"

const nizObjekata = [
	{
		ime: "Radisa",
		prezime: "Bogdanovic",
		godine: 20,
		pol: "musko",
		id: 123456789112,
	},
	{
		ime: "Ivan",
		prezime: "Bogdanovic",
		godine: 25,
		pol: "musko",
		id: 224679876543,
	},
	{
		ime: "Srecko",
		prezime: "Petrovic",
		godine: 30,
		pol: "musko",
		id: 359876043279,
	},
	{
		ime: "Jelena",
		prezime: "Jankovic",
		godine: 35,
		pol: "zensko",
		id: 433276589654,
	},
	{
		ime: "Natasa",
		prezime: "Nesovanovic",
		godine: 20,
		pol: "zensko",
		id: 523456789112,
	},
];
const zenskiClanovi = nizObjekata.filter((Object) => {
	return Object.pol === "zensko";
});
console.log(`Ovo su zenski clanovi:`, zenskiClanovi);

const korisnikSaId4 = nizObjekata.find((Object) => {
	return Object.id === 433276589654;
});
console.log(`ovo je korisnik kome id pocine sa 4:`, korisnikSaId4);
nizObjekata.forEach((Object) => {
	console.log(Object.ime);
});
for (i = 0; i < nizObjekata.length; i++) {
	console.log(
		`${nizObjekata[i].ime} je ${nizObjekata[i].pol} i id ove osobe je ${nizObjekata[i].id}`
	);
}
