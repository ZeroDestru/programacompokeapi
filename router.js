function carregarConteudo() {
    let path = window.location.pathname;
    let html = "";
    switch (path) { 
        case "/":
            html = "poke.html";
            break;
        case "/pokem":
            html = "pokedex.html";
            break;
        case "/pokedexcomp":
            html = "apresentar.html";
            break;
        
        
    }

    let container = document.getElementById("container");

    if (html != "") {
        fetch(html)
            .then(
                resposta => resposta.text()
            )
            .then(function (texto) {
                container.innerHTML = texto;
            });
    }
}

function transitionTo(event, path) {
    event.preventDefault();
    window.history.pushState("", "", path);
    carregarConteudo();
}

window.addEventListener("load", () => carregarConteudo());