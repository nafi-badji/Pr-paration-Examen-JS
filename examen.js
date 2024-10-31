
// Exercice 1 : Manipulation des types
// créer une fonction typeChecker qui prend une variable en entrée et retourne son type (string, number,boolean, object,...). Testez cette fonction avec differents types de données, y compris null, undefined, array,et object.

 function typeCheker(maVariable) {
    if(maVariable=== null){
        return "null"  
    }
    if(Array.isArray(maVariable)) {
        return "array"
    }
     return typeof maVariable
 }
console.log(typeCheker('Alice'));
console.log(typeCheker(78));
console.log(typeCheker(null));
console.log(typeCheker([18, 17, 19]));
console.log(typeCheker(false));
console.log(typeCheker({}));

 var x = 3;
console.log(typeof x);
// -------------------------------------------------------------------------------------------------------------------------
