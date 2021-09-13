/*let nom: string = "amine";
console.log(nom);*/

/*function info() {

    for (var i = 0; i < 10; i++) {
        console.log("i== " + i);
    }

    console.log("Finally i ==" + i);

}
info();*/
/*function somme(x: number, y: number) {
    console.log(x + y);
}
somme(10, 20);*/

/*let somme = (x, y: number) => console.log(x + y);// Arrow function
somme(1, 2);*/

/*let tab: any[] = [12, "angular", true, 'a'];
for (var i = 0; i < tab.length; i++) {
    console.log(" var  === " + tab[i]);
}

let names: string[] = ["amine", "anis", "radhy"];
for (var i = 0; i < names.length; i++) {
    console.log(" var  === " + names[i]);
}*/

import { Cours, Etudiant } from "./modeles"

function displayCours(c: Cours) {
    console.log(c.nom, +" " + c.volume);
}
displayCours(
    {
        'nom': 'angular',
        'volume': 30
    }
);

let e: Etudiant = new Etudiant("amine", 20);
let e2: Etudiant = new Etudiant();
e.info();
e2.info();