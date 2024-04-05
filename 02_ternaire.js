
/**
 * retourne la valeur la plus grande des deux paramètres
 * 
 * Contraintes:
 *    - utiliser l'opérateur ternaire (if interdit)
 */
function ternaire(a , b) {
   return a > b ? "a est supérieur à b" : "a est inférieur à b";
}

console.log(ternaire(1, 2));

module.exports = ternaire;