// exercice 1
let phrase1 = "Notre formation DL commence aujourd'hui";
let length1 = phrase1.length;
let text1 = "La phrase '" + phrase1 + "' contient " + length1 + " caractères.";
console.log(text1);

// exercice 2
let phrase2 = "Notre formation DL commence aujourd'hui";
let wordcount = 0;
let text2 = "La phrase '" + phrase2 + "' contient " + wordcount + " mots.";
let spt = phrase2.split(" ");
for (var i = 0; i < spt.length; i++){
    if (spt[i] === " "){
        wordcount = +1;
    }
    wordcount += 1;
}
console.log(text2);

// exercice 2 bis
let phrase2b = "Notre formation DL commence aujourd'hui";
let wordcount2 = phrase2b.match(/[\w\d\’\'-]+/gi).length;
let text2b = "La phrase '" + phrase2b + "' contient " + wordcount2 + " mots.";
console.log(text2b);

// exercice 3
let phrase3 = "Notre formation DL commence aujourd'hui";
let phrasenew = phrase3.replace("aujourd'hui", "demain");
console.log(phrase3);
console.log(phrasenew);

// exercice 4
let regex = /[\W_]/g;
let phrase4 = "Engage le jeu que je le gagne";
let text4true = "La phrase '" + phrase4 + "' est un palindrome"
let text4fals = "La phrase '" + phrase4 + "' n'est pas un palindrome"
let lower = phrase4.toLowerCase().replace(regex, "");
let rev = lower.split("").reverse().join("");
    if (lower === rev){
    console.log(text4true);
    }
    else {
    console.log(text4fals);
    }

// exercice 5
let franc = 1000;
let conv = 0.152;
let value = franc * conv;
console.log("montant en francs : " + franc);
console.log(franc + " francs = " + value + " euros");
// console.log(
//     "montant en francs : " + franc,'\n',
//     franc + " francs = " + value + " euros",
// );

// exercice 6
let prix = 9.99;
let qtty = 5;
let tva = 0.2;
let facture = prix * qtty + prix * qtty * tva;
console.log("Prix unitaire de l'article : " + prix + " euros");
console.log("Quantité : " + qtty);
console.log("Taux de TVA : " + tva);
console.log("Le montant de la facture à régler est de : " + facture.toPrecision(4) + " euros");

// exercice 7
let age = prompt("entrez l'age de l'enfant : ");
    if (age < 6){
        console.log("Votre enfante n'entre dans aucune catégorie");
    }
    else if (age < 8){
        console.log("L'enfant qui a " + age + " ans appartient à la catégorie 'Poussin'");
    }
    else if (age < 10){
        console.log("L'enfant qui a " + age + " ans appartient à la catégorie 'Pupille'");
    }
    else if (age < 12){
        console.log("L'enfant qui a " + age + " ans appartient à la catégorie 'Minime'");
    }
    else {
        console.log("L'enfant qui a " + age + " ans appartient à la catégorie 'Cadet'");
    }

// exercice 8
let nbr = prompt("entrez un nombre entier : ");
let multi = 0;
let result = 0;
let fin = nbr * 10;
console.log("Table de " + nbr + " : ")
    while (result < fin) {
        multi = multi + 1
        result = nbr * multi
        console.log(multi + " x " + nbr + " = " + result);
    }

// exercice 9
let age9 = parseInt(prompt("entrez votre age : "), 10);
let sexe = prompt("êtes vous un homme 'H' ou une femme 'F' ? ");
console.log("Age : " + age9);
console.log("Sexe : " + sexe);
    if (sexe == "F"){
        if (18 <= age9 && age9 <= 35){
        console.log("Vous êtes imposable");
        }
        else {
        console.log("vous n'êtes pas imposable");
        }
    }
    else if (sexe == "H"){
        if (age9 >= 20){
        console.log("Vous êtes imposable");
        }
        else{
        console.log("Vous n'êtes pas imposable");
        }
    }

// exercice 10
let prix2 = parseInt(prompt("Montant à payer : "), 10);
let vers = parseInt(prompt("Montant versé : "), 10);
let reste = vers - prix2;
let nb10 = 0;
let nb5 = 0;
let nb2 = 0;
let nb1 = 0;
let coin = "pièce";
console.log("Montant à payer : " + prix2 + " euros");
console.log("Montant versé : " + vers + " euros");
console.log("Reste à payer : " + reste + " euros");
    while (reste >= 10) {
        nb10 = nb10 + 1;
        reste = reste - 10;
    }
    if (reste >= 5){
        nb5 = 1;
        reste = reste - 5;
    }
    if (reste >= 2){
        nb2 = nb2 + 1;
        reste = reste - 2;
    }
    if (reste == 1){
        nb1 = 1;
        reste = reste - 1;
    }
    if (nb2 = 1){
        coin = " pièce";
    }
    else{
        coin = " pièces";
    }
console.log("Rendue de monnaie : " + nb10 + " billets de 10 euros - " 
                                    + nb5 + " billets de 5 euros - " 
                                    + nb2 + coin + " de 2 euros - "
                                    + nb1 + " pièce de 1 euro")

                                    
// exercice 11

let x = parseInt(prompt("Nombre de marques dans votre tableau : "), 10);
let tab = new Array(x);
let i2 = 0;
tab[0] = "Peugeot";
tab[1] = "Renault";
tab[2] = "BMW";
tab[3] = "Mercedes";
console.log("Il y a " + x + " Marques de voitures dans votre tableau : ");
console.log(tab);

// exercice 12

