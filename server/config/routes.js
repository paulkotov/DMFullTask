  // user routes
module.exports = function (app, passport, auth) {

  //User controller
  var users = require('../app/controllers/users');
  var requiresLogin = require('./middlewares/authorization').requiresLogin;
  var home = require('../app/controllers/home');

  app.get('/login', users.login);
  app.get('/logout', users.logout);
  app.post('/users/session', passport.authenticate('local', {failureRedirect: '/login', failureFlash: 'Invalid email or password.'}), users.session);
  app.get('/users/:userId', users.show);

  app.get('/auth/facebook',
  passport.authenticate('facebook', {
      scope: ['email', 'user_about_me'],
      failureRedirect: '/login'
  }),
  users.signin
);

app.get('/auth/facebook/callback',
  passport.authenticate('facebook', {
      successRedirect: '/',
      failureRedirect: '/login' }),
    users.authCallback
);

app.get('/auth/vk',
  passport.authenticate('vk', {
      scope: ['friends']
  }),
  users.signin);

app.get('/auth/vk/callback',
  passport.authenticate('vk', {
      failureRedirect: '/login'
  }),
  users.authCallback
 );

  app.get('/auth/google', passport.authenticate('google', 
          { scope: ['https://www.googleapis.com/auth/userinfo.profile', 'https://www.googleapis.com/auth/userinfo.email'] }), 
          users.signin);
  app.get('/auth/google/callback', passport.authenticate('google', 
          { failureRedirect: '/login', successRedirect: '/' }), 
          users.authCallback); 
  
  app.get('/user/pokemons', requiresLogin, users.showPokemons);
  app.post('/user/pokemon', requiresLogin, users.savePokemon);

  app.get('/auth', function(req, res){
    if (req.isAuthenticated()) {
      res.send(req.user);
      return;
    }
    res.send({});
  });
  
  app.get('/', home.index);
}
