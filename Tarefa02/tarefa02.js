let next = "";
let resultado = "";
let result = "";
let num = 1;
async function listaPlaneta() {
    result = await fetch("https://swapi.dev/api/planets/");
    resultado = await result.json();
    next = resultado.next;
    while (next != null) {
        listResultado(resultado);
    
        result = await fetch(`${next}`);
        resultado = await result.json();
        next = resultado.next;
    };
    listResultado(resultado);
};

function listResultado(resultado) {
    resultado.results.forEach(element => {
        let li = document.createElement('li');
        li.innerHTML = `<div>
                  <button>Planeta ${num} ${element.name}</button> 
                </div>
                <br>`
        listPlanet.appendChild(li);
        num = num + 1;
    });

};

Window.onload = listaPlaneta();