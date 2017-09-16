import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { login } from './actions';
import { getProfile } from './libs/api';

import App from  './containers/App';
import Auth from './containers/Auth';
import NotFound from './components/NotFound';
import reducer from './reducers';

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

getProfile().then( profile => store.dispatch(login(profile)));

render(
  <Provider store={store}>
    <BrowserRouter>
    <Switch>
      <Route exact path="/" component={App} />
      <Route path="/login" component={Auth} />
      <Route path="*" component={NotFound} />
    </Switch>
    </BrowserRouter>  
  </Provider>,
  document.getElementById('root')
);
