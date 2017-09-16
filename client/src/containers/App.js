import React, { PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import AuthPanel from '../components/AuthPanel';
import Header from '../components/Header';
import Main from '../components/Main';
import * as Actions from '../actions';

const App = ({ profile, pokemons, actions }) => (
  <div className="Decision mapper">
    <AuthPanel profile={profile} login={actions.login} logout={actions.logout}/>
    <Header addData={actions.addData} 
            deleteData={actions.deleteData} 
            profile={profile}
            loadData={actions.loadData}/>
    <Main profile={profile} pokemons={pokemons} actions={actions} />
  </div>
);

App.propTypes = {
  pokemons: PropTypes.array.isRequired,
  profile: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  pokemons: state.pokemons.data,
  profile: state.pokemons.profile
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(Actions, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
