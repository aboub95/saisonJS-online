/**Écrire un programme qui demande la moyenne d’un élève et affiche sa mention (Passable, Assez-Bien, Bien, Très bien, Excellent).
NB : La moyenne varie entre 0 et 20.
 */

let moyenne = parseFloat(prompt("Entrez la moyenne de l'élève (entre 0 et 20) :" ));
// Vérifier si la moyenne est valide (entre 0 et 20)
if (isNaN(moyenne) || moyenne < 0 || moyenne > 20) {
    alert("Entrée invalide. Veuillez entrer une moyenne valide entre 0 et 20.");
  } else {
    // Déterminer la mention en fonction de la moyenne
    let mention;
    if (moyenne < 10) {
      mention = "Passable";
    } else if (moyenne < 12) {
      mention = "Assez-Bien";
    } else if (moyenne < 14) {
      mention = "Bien";
    } else if (moyenne < 16) {
      mention = "Très bien";
    } else {
      mention = "Excellent";
    }
  
    // Afficher la mention de l'élève
    alert(`La moyenne de l'élève est ${moyenne} et sa mention est ${mention}.`);
  }

















