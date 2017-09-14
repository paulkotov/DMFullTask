var mongoose = require('mongoose')
, Pokemon = mongoose.model('Pokemon');

exports.addPokemon = function(data){
    var pokemon = new Pokemon({
        name: data.name,
        url: data.url
    });
    return pokemon.save();  
}

exports.showPokemons = function(){
  return pokemon.find();
}