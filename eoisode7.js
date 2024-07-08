/**Ecrire un programme  qui demande à l'utilisateur son nom et son sexe et affiche BONJOUR MONSIEUROU BONJOUR MADAME Ou LE NOM SAISI PAR L'UTILISATEUIR */

let age = parseInt(prompt("Entrez votre age :"));
/**Vérifions si l'age renseigner est valide  */
if (isNaN(age)) {
  alert("Entrée invalide. Veillez rentrer à nouveau votre age. ");
}

else{
  if(age < 18) {
    alert("Vous etes mineur.");
  }
  else{
    alert("Vous etes majeur")
  }
}
