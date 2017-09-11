import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import App from  './containers/App';
import Auth from './containers/Auth';
import reducer from './reducers';

const store = createStore(reducer);


render(
  <Provider store={store}>
    <BrowserRouter>
    <Switch>
      <Route exact path="/" component={App} ></Route>
      <Route path="/login" component={Auth} ></Route>
    </Switch>
    </BrowserRouter>  
  </Provider>,
  document.getElementById('root')
);
