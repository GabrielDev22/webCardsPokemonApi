let pokemonContainer = document.querySelector('.pokemon-container')

function getData(id){
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
    .then((res) => res.json())
    .then((data) => {
        createPokemons(data)
        console.log(data)
    })
}

function pokemons(number){
    for(let i = 1; i <= number; i++ ){
        getData(i)
    }
}

function createPokemons(pokemons){
    const card = document.createElement('div')
    card.classList.add('pokemon-block');

    const imagenContainer = document.createElement('div'),
          imagen = document.createElement('img'),
          titulo = document.createElement('h2'),
          number = document.createElement('p'),
          baseExperiencia = document.createElement('p');
          
         

        
        titulo.classList.add('titulo')  
        number.classList.add('number')
        imagenContainer.classList.add('contenedor-imagen')  
        imagen.classList.add('imagen');

          
          baseExperiencia.textContent = pokemons.base_experience;
          titulo.textContent = pokemons.name
          number.textContent = `#${pokemons.id.toString().padStart(3, 0)}`;
          imagen.src = pokemons.sprites.other.home.front_default;

          imagenContainer.appendChild(imagen);

          card.appendChild(imagenContainer);
          card.appendChild(titulo);
          card.appendChild(number);
          card.appendChild(baseExperiencia)
    

          pokemonContainer.appendChild(card);
}
pokemons(500)






