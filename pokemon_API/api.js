let urlImagemNormal = "";
let urlImagemShiny = "";
let mostrandoShiny = false;

async function buscarPokemon() {
    const nomeOriginal = document.getElementById('pokemonInput').value.toLowerCase();
    const url = `https://pokeapi.co/api/v2/pokemon/${nomeOriginal}`;

    try {
        const resposta = await fetch(url);
        if (!resposta.ok) throw new Error("Pokémon não encontrado");

        const dados = await resposta.json();

        
        const nome = dados.name;
        const tipo = dados.types[0].type.name; 
        urlImagemNormal = dados.sprites.front_default;
        urlImagemShiny = dados.sprites.front_shiny;

       
        document.getElementById('pokeNome').innerText = nome.toUpperCase();
        document.getElementById('pokeTipo').innerText = tipo;
        document.getElementById('pokeImg').src = urlImagemNormal;
        
       
        document.getElementById('resultado').style.display = "block";
        mostrandoShiny = false; 
        document.getElementById('btnShiny').innerText = "Ver Versão Shiny";

    } catch (erro) {
        alert(erro.message);
    }
}


document.getElementById('btnShiny').addEventListener('click', () => {
    const imgElemento = document.getElementById('pokeImg');
    
    if (mostrandoShiny) {
        imgElemento.src = urlImagemNormal;
        document.getElementById('btnShiny').innerText = "Ver Versão Shiny";
    } else {
        imgElemento.src = urlImagemShiny;
        document.getElementById('btnShiny').innerText = "Ver Versão Normal";
    }
    mostrandoShiny = !mostrandoShiny;
});