function getProfile(){
  return fetch('http://paulkotov.localtest.me:5000/auth', {
    //mode: 'no-cors',
    method: 'GET',
    credentials: 'include',
    headers: {
      Accept: 'application/json'
    }
  }).then(response => response.json())
//  .then(r =>  JSON.parse(r) )
    .catch((err)=> alert(err));
}

function isObjEmpty(obj){
  for (var i in obj) {
    if (obj.hasOwnProperty(i)) {
      return false;
    }
  }
  return true;
} 

function savePokemon(pokemon) {
  fetch('http://paulkotov.localtest.me:5000/pokemons/add' ,{
    method:  'POST',
    credentials: 'include',
    headers: {  
      'Content-Type':'application/json' 
    },
    body: JSON.stringify(pokemon)
  }).then(()=> {alert(`${pokemon.name} saved`);
  });
}

function delPokemon(pokemon){
  fetch(`http://paulkotov.localtest.me:5000/pokemons/del/${pokemon.name}` ,{
    method:  'GET',
    credentials: 'include',
    headers: {  
      'Content-Type':'application/json' 
    }
  }).then(()=> {alert(`${pokemon.name} deleted`); });
}

function LoadOuterData(){
  return fetch('https://pokeapi.co/api/v2/pokemon/?limit=1000' ,{
    mode: 'cors',
    method:  'GET',
    headers: {
      'Content-type': 'plain/text'
    }
  }).then(r => r.json()); 
}

function LoadDBData(){
  return fetch('http://paulkotov.localtest.me:5000/pokemons/showall', {
    method:  'GET',
    credentials: 'include',
    headers: {
      'Content-type': 'plain/text'
    }
  }).then(r => r.json());
}

export { isObjEmpty, getProfile, LoadOuterData, LoadDBData, savePokemon, delPokemon };
