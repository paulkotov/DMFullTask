
/**
 * Module dependencies.
 */

var mongoose = require('mongoose')
, Schema = mongoose.Schema;

var PokemonSchema = new Schema({
    name: String,
    url: String
  });

mongoose.model('Pokemon', PokemonSchema)