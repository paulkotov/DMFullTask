import React, { Component, PropTypes } from 'react';
import { isObjEmpty } from '../libs/api';
import SocialContainer from './SocialContainer';
class AuthPanel extends Component {
  
  constructor(){
    super();
    this.state = {
      profile: {}
    };
  }

  RenderSocial = () => (
    <SocialContainer className="unauthorized" />
  );
  
  RenderAuth = () => (
    <div className="authorized">
      Loged in as: <strong>{this.props.profile.name}</strong>
      <button className="btn btn-default" onClick={this.OnLogoutHandler}>LogOut</button>  
    </div>
    );

  OnLogoutHandler = () => {
    this.props.logout();
  };

  render(){
    const { profile } = this.props;
    // console.log(profile);
    return (
      <div>
        { isObjEmpty(profile) ? this.RenderSocial() : this.RenderAuth() } 
      </div>
    );
  }
}

AuthPanel.propTypes = {
  profile: PropTypes.object,
  login: PropTypes.func.isRequired,
  logout: PropTypes.func.isRequired
};

export default AuthPanel;
