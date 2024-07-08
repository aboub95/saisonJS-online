/**Écrire un programme permettant de permuter les valeurs de deux variables. Le résultat est affiché en console.
 */
let a = 5 ;
let b = 12 ;
console.log('valeur initiales : a = ${a}, b = ${b}');
/**Permutons les valeurs de a et b en utilisant une variable temporaire */
let temp = a;
a = b ;
b = temp ;
/**Affichons les valeurs permutées de a et b  */
console.log('valeurs permutées : a = ${a}, b =${b}');
alert(b);
alert(temp);