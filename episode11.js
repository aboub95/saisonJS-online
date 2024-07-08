

// Demande la moyenne de l'élève
const moyenne = parseFloat(prompt("Entrez la moyenne de l'élève (entre 0 et 20) : "));

// Définition des mentions et de leurs plages de valeurs
const mentions = [
  { min: 0, max: 9, mention: "Non admis" },
  { min: 10, max: 12, mention: "Passable" },
  { min: 13, max: 14, mention: "Assez-Bien" },
  { min: 15, max: 16, mention: "Bien" },
  { min: 17, max: 20, mention: "Très bien" },
  { min: 19, max: 20, mention: "Excellent" }
];

// Recherche de la mention correspondante à la moyenne
let mention;
for (const m of mentions) {
  if (moyenne >= m.min && moyenne <= m.max) {
    mention = m.mention;
    break;
  }
}

// Affichage de la mention
alert(`La mention de l'élève est : ${mention}`);



















