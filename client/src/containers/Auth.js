import React, { PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import AuthPanel from '../components/AuthPanel';

import * as Actions from '../actions';

const Auth = ({ auth, actions }) => (
  <div className="auth">
    <AuthPanel isAuth={auth} login={actions.login} logout={actions.logout}/>
  </div>  
);

Auth.propTypes = {
  auth: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
};
  
const mapStateToProps = state => ({
  auth : state.pokemons.profile
});
  
const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(Actions, dispatch)
});
  
export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Auth);