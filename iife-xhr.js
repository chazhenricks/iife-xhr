function showCarnivores (carnivores) {

    var carnivoreDiv = document.getElementById("carnivores");
    carnivoreDiv.innerHTML += `<h2> CARNIVORES </h2>`;

    for(var i=0; i<carnivores.carnivores.length;i++){
        carnivoreDiv.innerHTML += `<p>`;
        carnivoreDiv.innerHTML += `${carnivores.carnivores[i].name}`;
        carnivoreDiv.innerHTML += `</p>`;
    }

}

function showHerbivores (herbivores) {
    var herbivoreDiv = document.getElementById("herbivores");
    herbivoreDiv.innerHTML += `<h2> HERBIVORES </h2>`;

    for (var i=0;i<herbivores.herbivores.length;i++){
        herbivoreDiv.innerHTML += `<p>`;
        herbivoreDiv.innerHTML += `${herbivores.herbivores[i].name}`;
        herbivoreDiv.innerHTML += `</p>`;
    }

}
Predator.loadCarnivores(showCarnivores);
Predator.loadHerbivores(showHerbivores);


