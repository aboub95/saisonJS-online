// Demande le montant de la facture
const montantFacture = parseFloat(prompt("Entrez le montant de la facture : "));

// Définition de la remise
const remise = 0.10;

// Calcul du total à payer
let totalAPayer;
if (montantFacture > 40000) {
  // Applique la remise de 10% si le montant dépasse 40.000 F
  totalAPayer = montantFacture - (montantFacture * remise);
} else {
  // Pas de remise si le montant est inférieur ou égal à 40.000 F
  totalAPayer = montantFacture;
}

// Affichage du total à payer
alert(`Le total à payer est : ${totalAPayer.toFixed(2)} F`);



















