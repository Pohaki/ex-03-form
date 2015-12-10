/* Solution 1 JavaScript natif (sans jQuery) :
   on utilise les méthodes disponibles sur document :
   addEventListener, getElementById, getElementsByTagName
   */

// on attend que le DOM soit chargé sinon #calc1 n'est pas trouvé
// et addEventListener n'aura aucun effet
document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('calc1').addEventListener('submit', function(e) {
    console.log("--------- Méthode 1");
    // on empêche le formulaire d'être soumis
    e.preventDefault();
    // on récupère une "nodeList" de tous les inputs
    var inputs = document.getElementsByTagName('input');
    console.log("--- inputs");
    console.log(inputs);
    // on initialise le résultat
    var result = 0;
    for(var i = 0 ; i < inputs.length ; i++) {
      // on convertit chaque value en entier, puis on l'ajoute à result
      result += parseInt(inputs[i].value);
    }
    // on écrit le résultat
    document.getElementById('result').innerHTML = result;

  });
});

/* Solution 2 avec jQuery :
   les éléments du document sont "wrappés" dans jQuery avec $
   et d'autres méthodes sont alors disponibles
   */
// on attend que le DOM soit chargé
$(document).ready(function() {
  $('#calc2').on('submit', function(e) {
    console.log("--------- Méthode 2");
    // on empêche le formulaire d'être soumis
    e.preventDefault();
    // $(this) est le formulaire "calc2" wrappé dans jQuery
    // serializeArray renvoie toutes les valeurs du formulaire
    var inputs = $(this).serializeArray();
    console.log("--- inputs");
    console.log(inputs);
    // on ne récupère que le champ value de inputs, et on le convertit
    var numbers = inputs.map(x => parseInt(x.value));
    // on fait la somme
    var sum = numbers.reduce((x,y) => x + y);
    // on écrit le résultat
    $("#result").text(sum);
  });
});
