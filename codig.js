const baseUrl = 'https://pokeapi.co/api/v2/pokemon/';


    
  function procu(){

    var poke = document.querySelector('input').value.toLowerCase(), 
    pokemon;
    
    
      fetch(baseUrl + poke)
        .then(response => response.json())
        .then(data => {
          pokemon = data;
          
          document.getElementById('nome').innerHTML = pokemon['name'];
          document.getElementById('numero').innerHTML = pokemon['id'];
          let img = data['sprites']['front_default'];
          document.getElementById('pic').setAttribute('src', img);
            table.innerHTML  =[
            '<table>',
            '<thead>',
            '<tr>',
            `<th>Tipo: ${data.types.map(item => item.type.name).toString()}</th><th>          </th>`,
            '</tr>',
            '</thead>',
            '<tbody>',
            `<tr>
            <td>Peso: ${data.weight  / 10}kg</td><td>Altura: ${data.height  / 10}m</td>
            </tr>`,
            '</tbody>',
            '</table>'].join("\n");
            stat.innerHTML = `
            <h3>Skills: ${data.moves.map(item => ' ' + item.move.name).toString()}</h3>
            `;
        })
        .catch(err => console.log(err));
     

    
    
  }
