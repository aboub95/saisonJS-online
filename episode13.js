// Définition de l'opération et de la bonne réponse
const operation = "5+1";
const bonneReponse = 6;

// Boucle infinie pour demander la réponse à l'utilisateur
while (true) {
  // Demande la réponse à l'utilisateur
  const reponse = parseInt(prompt(`Combien font ${operation}?`));

  // Vérifie si la réponse est correcte
  if (reponse === bonneReponse) {
    alert("Bravo! Vous avez trouvé la bonne réponse!");
    break; // Sort de la boucle infinie
  } else {
    alert("Erreur! Essayez à nouveau.");
  }
}






















