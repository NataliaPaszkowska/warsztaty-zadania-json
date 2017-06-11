"use strict";

var jsonPracownicy = {
	"pracownicy": [
		{
			"firstName": "Krystian",
			"lastName": "Dziopa"
		},
		{
			"firstName": "Anna",
			"lastName": "Szapiel"
		},
		{
			"firstName": "Piotr",
			"lastName": "Żmuda"
		}
]
}

/*parsowanie - jakby to byl json to tak musielibysmy tol zrobic
var jsonPracownicy = JSON.parse(text);
console.log(Text);
console.log(jsonPracownicy);*/

console.log(jsonPracownicy);
jsonPracownicy.pracownicy.forEach( function(el, index) {
	 console.log("imie i nazwisko: " + el.firstName + " " + el.lastName);
});

								 