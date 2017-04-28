var Predator = (function () {
  var carnivores = [];
  var herbivores = [];

    return {
    loadCarnivores: function(callbackToInvoke){
      var loader = new XMLHttpRequest();
      loader.open("GET", "carnivores.json");
      loader.send();
      loader.addEventListener("load", function (event) {
        // Set the value of the private array
        carnivores = JSON.parse(event.target.responseText);

        // Invoke the callback function so that the caller knows
        // that the process is complete. Make sure to pass the
        // carnivore array as an argument.
        callbackToInvoke(carnivores);
      });
    },
    loadHerbivores : function(callbackToInvoke){
      var herbLoader = new XMLHttpRequest();
      herbLoader.open("GET", "herbivores.json");
      herbLoader.send();
      herbLoader.addEventListener("load", function(event){
          herbivores = JSON.parse(event.target.responseText);
          callbackToInvoke(herbivores);
      });
    }
  }


})();
