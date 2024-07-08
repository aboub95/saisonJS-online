/**Ecrire un programme qui demande le nom de l’utilisateur et son sexe et affiche Bonjour monsieur <nom> 
 * ou Bonjour madame <nom>. Où <nom> est le nom saisi par l’utilisateur. */

let nom= prompt("Entrez votre nom :");
let sexe= prompt("Entrez votre sexe (M/F) : ");
 
if(sexe. toLowerCase() !== "M" && sexe. toLowerCase() !== "F") {
  alert("sexe invalide. veillez entrer 'M' pour masculin ou 'F' pour féminin. ");
}

else{
  let message = "";
  if(sexe.toLowerCase() === 'M') {
    message = 'Bonjour Monsieur ${nom}';
  }
  else{
    message = 'Bonjour Madame ${nom}';
  }
  alert(message)
}