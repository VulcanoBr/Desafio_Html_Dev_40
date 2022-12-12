let next = "";
let resultado = "";
let result = "";
let num = 1;
async function listaPlaneta() {
    result = await fetch("https://swapi.dev/api/planets/");
    resultado = await result.json();
    next = resultado.next;
    while (next != null) {
        resultado.results.forEach(element => {
            console.log("Planeta " +  num +  " " +  element.name);
            num = num + 1;
        });
        result = await fetch(`${next}`);
        resultado = await result.json();
        next = resultado.next;
    };
    resultado.results.forEach(element => {
        console.log("Planeta " +  num +  " " +  element.name);
        num = num + 1;
    });
};

Window.onload = listaPlaneta();