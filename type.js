const principal = () =>{
    fetch(`https://pokeapi.co/api/v2/pokemon/pikachu`)
        .then(response => response.json())
        .then(data => {
            pokemon = data;
    
            document.getElementById('nome').innerHTML = pokemon['name'];
            document.getElementById('numero').innerHTML = pokemon['id'];
            let img = data['sprites']['front_default'];
            document.getElementById('pic').setAttribute('src', img);
        });}

    const fetchPokemon = () => {
    const promises = [];
    

    for (let i = 1; i <= 251; i++) {
        const url = `https://pokeapi.co/api/v2/pokemon/${i}`;

        
        fetch(url)
            .then(response => response.json())
            .then(data =>{
                console.log('pronto'+i);
                pokemon = data;
                let img = data['sprites']['front_default'];
                
                pokedex.innerHTML+=  `<th>
                <li class="card">
                    <img class="card-image" src="${img}"/>
                    <h2 class="card-title">${pokemon.id}. ${pokemon.name}</h2>
                    <p class="card-subtitle">Type: ${data.types.map(item => item.type.name).toString()}</p>
                </li></th>`
            ;})
            
    };}

    const fetchPokemon2 = () => {
    const promises = [];
    

    for (let i = 252; i <= 493; i++) {
        const url = `https://pokeapi.co/api/v2/pokemon/${i}`;

        
        fetch(url)
            .then(response => response.json())
            .then(data =>{
                console.log('pronto'+i);
                pokemon = data;
                let img = data['sprites']['front_default'];
                
                pokedex.innerHTML+=  `<th>
                <li class="card">
                    <img class="card-image" src="${img}"/>
                    <h2 class="card-title">${pokemon.id}. ${pokemon.name}</h2>
                    <p class="card-subtitle">Type: ${data.types.map(item => item.type.name).toString()}</p>
                </li></th>`
            ;})
            
    };}
    const fetchPokemon3 = () => {
        const promises = [];
        
    
        for (let i = 494; i <= 721; i++) {
            const url = `https://pokeapi.co/api/v2/pokemon/${i}`;
    
            
            fetch(url)
                .then(response => response.json())
                .then(data =>{
                    console.log('pronto'+i);
                    pokemon = data;
                    let img = data['sprites']['front_default'];
                    
                    pokedex.innerHTML+=  `<th>
                    <li class="card">
                        <img class="card-image" src="${img}"/>
                        <h2 class="card-title">${pokemon.id}. ${pokemon.name}</h2>
                        <p class="card-subtitle">Type: ${data.types.map(item => item.type.name).toString()}</p>
                    </li></th>`
                ;})
                
        };}
    const fetchPokemon4 = () => {
    const promises = [];
    

    for (let i = 722; i <= 898; i++) {
        const url = `https://pokeapi.co/api/v2/pokemon/${i}`;

        
        fetch(url)
            .then(response => response.json())
            .then(data =>{
                console.log('pronto'+i);
                
                pokemon = data;
                let img = data['sprites']['front_default'];
                
                pokedex.innerHTML+=  `<th>
                <li class="card">
                    <img class="card-image" src="${img}"/>
                    <h2 class="card-title">${pokemon.id}. ${pokemon.name}</h2>
                    <p class="card-subtitle">Type: ${data.types.map(item => item.type.name).toString()}</p>
                </li></th>`
            ;})
            
    };}
    
    function refre(){
        document.location.reload(true);
    }

    function impre(){
        const pokedex = document.getElementById('pokedex');
        fetchPokemon();
    }
    function impre2(){
        const pokedex = document.getElementById('pokedex');
        fetchPokemon2();
    }
    function impre3(){
        const pokedex = document.getElementById('pokedex');
        fetchPokemon3();
    }
    function impre4(){
        const pokedex = document.getElementById('pokedex');
        fetchPokemon4();
    }

principal()