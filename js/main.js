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

    // CREANDO ELEMENTOS DEL DOM
    const imagenContainer = document.createElement('div'),
          imagen = document.createElement('img'),
          titulo = document.createElement('h2'),
          number = document.createElement('p'),
          baseExperiencia = document.createElement('p'),
          peso = document.createElement('p');
         
          
    // DANDOLE CLASES A LOS ELEMETOS CREADOS EN EL DOM
        titulo.classList.add('titulo')  
        number.classList.add('number')
        peso.classList.add('peso-pokemon')
        baseExperiencia.classList.add('experiencia-pokemons')
        imagenContainer.classList.add('contenedor-imagen')  
        imagen.classList.add('imagen');


    // ANINANDO LOS ELEMENTOS DEL DOM CON APPECHILD PARA QUE ASI APAREZCA EL CONTENIDO      
          baseExperiencia.textContent = `Experiencia: ${pokemons.base_experience}`;
          titulo.textContent = pokemons.name
          number.textContent = `Tarjeta: #${pokemons.id.toString().padStart(3, 0)}`;
          imagen.src = pokemons.sprites.other.home.front_default;
          peso.textContent = `Peso: ${pokemons.weight}`
         
    
          imagenContainer.appendChild(imagen);

          card.appendChild(imagenContainer);
          card.appendChild(titulo);
          card.appendChild(number);
          card.appendChild(peso)
          card.appendChild(baseExperiencia)


          // HACIENDO UN ARRAY PARA LOS STAT DE LOS POKEMONS

          pokemonContainer.appendChild(card);
}
pokemons(9);









