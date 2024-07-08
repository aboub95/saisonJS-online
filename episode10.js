/** */// Prompt the user to enter the bill amount
let billAmount = parseFloat(prompt("Entrez le montant de la facture : "));

// Check if the bill amount is valid (a positive number)
if (isNaN(billAmount) || billAmount <= 0) {
  alert("Invalid input. Please enter a valid bill amount (positive number).");
} else {
  // Calculate the discount (if applicable)
  let discount = 0;
  if (billAmount > 40000) {
    discount = billAmount * 0.1; // 10% discount
  }

  // Calculate the total amount to be paid
  let totalAmount = billAmount - discount;

  // Display the total amount to be paid
  alert(`Le montant total à payer est de ${totalAmount.toFixed(2)} F.`);
}

