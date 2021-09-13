"use strict";
exports.__esModule = true;
exports.Etudiant = void 0;
var Etudiant = /** @class */ (function () {
    function Etudiant(nom, age) {
        this.nom = nom;
        this.age = age;
        this.nom = nom;
        this.age = age;
    }
    /*private nom: string;
    private age: number;*/
    Etudiant.prototype.info = function () {
        console.log("nom : " + this.nom + "age :" + this.age);
    };
    return Etudiant;
}());
exports.Etudiant = Etudiant;
