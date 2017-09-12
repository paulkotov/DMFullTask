
var path = require('path')
  , rootPath = path.normalize(__dirname + '/..')
  , templatePath = path.normalize(__dirname + '/../app/mailer/templates');

module.exports = {
  development: {
    db: 'mongodb://127.0.0.1/pokemons',
    root: rootPath,
    app: {
      name: 'Pokemons'
    },
    facebook: {
      clientID: "1925501834358046",
      clientSecret: "e1188f642d28e0bb583924ee47c4df41",
      callbackURL: "http://paulkotov.localtest.me:5000/auth/facebook/callback"
    },
    twitter: {
      clientID: "CONSUMER_KEY",
      clientSecret: "CONSUMER_SECRET",
      callbackURL: "http://paulkotov.localtest.me:5000/auth/twitter/callback"
    },
    github: {
      clientID: 'APP_ID',
      clientSecret: 'APP_SECRET',
      callbackURL: 'http://paulkotov.localtest.me:5000/auth/github/callback'
    },
    google: {
      clientID: "254861698001-veanvbofcirtvsbiesuk3ujt1ldvh1bq.apps.googleusercontent.com",
      clientSecret: "HQyY_VxvMeSO0i2670eGf8j-",
      callbackURL: "http://paulkotov.localtest.me:5000/auth/google/callback"
    },
    vk: {
      clientID: "6181955",
      clientSecret: "6kOIBqz0rWgokactufuD",
      callbackURL: "http://paulkotov.localtest.me:5000/auth/vk/callback"
    }
  },
  test: {
    db: 'mongodb://127.0.0.1:5000/pokemons_test',
    root: rootPath,
    app: {
      name: 'Pokemons'
    },
    facebook: {
      clientID: "1925501834358046",
      clientSecret: "e1188f642d28e0bb583924ee47c4df41",
      callbackURL: "http://paulkotov.localtest.me:5000/auth/facebook/callback"
    },
    twitter: {
      clientID: "CONSUMER_KEY",
      clientSecret: "CONSUMER_SECRET",
      callbackURL: "http://paulkotov.localtest.me:5000/auth/twitter/callback"
    },
    github: {
      clientID: 'APP_ID',
      clientSecret: 'APP_SECRET',
      callbackURL: 'http://paulkotov.localtest.me:5000/auth/github/callback'
    },
    google: {
      clientID: "254861698001-veanvbofcirtvsbiesuk3ujt1ldvh1bq.apps.googleusercontent.com",
      clientSecret: "HQyY_VxvMeSO0i2670eGf8j-",
      callbackURL: "http://paulkotov.localtest.me:5000/auth/google/callback"
    }
  },
  production: {}
}
