import React, { PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import AuthPanel from '../components/AuthPanel';
import Header from '../components/Header';
import Main from '../components/Main';
import * as Actions from '../actions';

const App = ({ own, profile, pokemons, actions }) => (
  <div className="Decision mapper">
    <AuthPanel profile={profile} login={actions.login} logout={actions.logout}/>
    <Header addData={actions.addData} 
            deleteData={actions.deleteData} 
            profile={profile}
            loadData={actions.loadData}/>
    <Main own={own} profile={profile} pokemons={pokemons} actions={actions} />
  </div>
);

App.propTypes = {
  own: PropTypes.bool.isRequired,
  profile: PropTypes.object.isRequired,
  pokemons: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  own: state.pokemons.own,
  profile: state.pokemons.profile,
  pokemons: state.pokemons.data,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(Actions, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
