
/**
 * Utiliser les ternaires en les chainants, pour éviter les if elseif else
 * 
 * Renvoyer ">" si a supérieur à b
 * Renvoyer "<" si a inférieur à b
 * Renvoyer "=" si a égal à b
 * 
 * Contraintes:
 *    - utiliser l'opérateur ternaire (if interdit)
 */

function ternaryChain(a, b) {
   return a > b ? "a est supérieur à b" :
         a < b ? "a est inférieur à b" : "a est égal à b";
}

module.exports = ternaryChain;