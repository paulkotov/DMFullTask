import React, { PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import AuthPanel from '../components/AuthPanel';
import Header from '../components/Header';
import Main from '../components/Main';
import * as Actions from '../actions';

const App = ({ auth, pokemons, actions }) => (
  <div className="Decision mapper">
    <AuthPanel isAuth={auth} login={actions.login} logout={actions.logout}/>
    <Header addData={actions.addData} 
            deleteData={actions.deleteData} 
            isAuth={auth}
            loadData={actions.loadData}/>
    <Main auth={auth} pokemons={pokemons} actions={actions} />
  </div>
);

App.propTypes = {
  pokemons: PropTypes.array.isRequired,
  auth: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  pokemons: state.pokemons.data,
  auth: state.pokemons.profile
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(Actions, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
