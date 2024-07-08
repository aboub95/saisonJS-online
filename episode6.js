/**Écrire un programme qui demande à l’utilisateur trois nombres et affiche la moyenne de ces nombres en alerte. */
let number1 =parseFloat(promt("Entrez le premier nombres : "));
let number2 = parseFloat(promt("Entrez le second nombres : "));
let number3 = parseFloat(promt("Entrez troisième nombres : "));

/**Calculons la moyenne des trois nombres saisie  */

if(isNaN(number1), isNaN(number2), isNaN(number3)){
    alert("Entrée invalide. Veillez entrer des nombres valides");
}

else{
    const moyenne = (number1 + number2 + number3) / 3;
alert(moyenne);
}
