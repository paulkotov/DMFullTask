import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { isObjEmpty } from '../libs/api';

const SocialContainer = styled.div`
  display: inline-flex;
  flex-direction: row-reverse;
  padding: 10px; 
  `;
  
const SocialIcon = styled.div`
  pointer: cursor;
  padding: 10px;
  &:hover {
    box-shadow: 0 0 5px rgba(0,0,0,0.3);
    background: linear-gradient(to bottom, #fcfff4, #e9e9ce);
    color: #a00;
  }
`;

class AuthPanel extends Component {
  
  constructor(){
    super();
    this.state = {
      profile: {}
    };
  }

  socialAuthHandler = () => (
      <Link to="/login" />
  );

  VKRender(){
    return(
      <span>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
        <path className="st0" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm.25 16.996h-2.134c-1.205 0-1.409-.687-2.401-1.679-.897-.897-1.395-.209-1.374 1.068.006.339-.161.611-.566.611-1.264 0-3.08.178-4.918-1.806-1.883-2.033-3.857-6.111-3.857-6.513 0-.237.196-.344.524-.344h2.17c.574 0 .623.284.783.649.667 1.521 2.265 4.574 2.69 2.87.244-.978.344-3.245-.703-3.44-.594-.11.452-.746 1.968-.746.377 0 .786.041 1.205.137.769.179.771.523.761 1.026-.039 1.903-.269 3.184.233 3.507.479.31 1.739-1.717 2.403-3.281.183-.433.219-.722.734-.722h2.654c1.39 0-.182 1.997-1.383 3.557-.968 1.255-.916 1.28.209 2.324.803.744 1.75 1.76 1.75 2.336.002.272-.21.446-.748.446z"/>
        </svg>
      </span>
    );
  }

  FacebookRender(){
    return(
      <span>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-3 7h-1.924c-.615 0-1.076.252-1.076.889v1.111h3l-.238 3h-2.762v8h-3v-8h-2v-3h2v-1.923c0-2.022 1.064-3.077 3.461-3.077h2.539v3z"/>
        </svg>
      </span>
    );
  }

  GoogleRender(){
    return(
      <span>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-10.333 16.667c-2.581 0-4.667-2.087-4.667-4.667s2.086-4.667 4.667-4.667c1.26 0 2.313.46 3.127 1.22l-1.267 1.22c-.347-.333-.954-.72-1.86-.72-1.593 0-2.893 1.32-2.893 2.947s1.3 2.947 2.893 2.947c1.847 0 2.54-1.327 2.647-2.013h-2.647v-1.6h4.406c.041.233.074.467.074.773-.001 2.666-1.787 4.56-4.48 4.56zm11.333-4h-2v2h-1.334v-2h-2v-1.333h2v-2h1.334v2h2v1.333z"/>
        </svg>
      </span>
    );
  }

  RenderSocial = () => (
    <SocialContainer className="unauthorized">
      <SocialIcon><a href="http://paulkotov.localtest.me:5000/auth/facebook">{this.FacebookRender()}</a></SocialIcon>
      <SocialIcon><a href="http://paulkotov.localtest.me:5000/auth/google">{this.GoogleRender()}</a></SocialIcon>
      <SocialIcon><a href="http://paulkotov.localtest.me:5000/auth/vk">{this.VKRender()}</a></SocialIcon>
    </SocialContainer>
  );
  
  RenderAuth = () => (
    <div className="authorized">
      Loged in as: <strong>{this.state.profile.name}</strong>
      <button className="btn btn-default" onClick={this.OnLogoutHandler}>LogOut</button>  
    </div>
    );

  OnLogoutHandler = () => {
    this.props.logout();
  };

  loadProfile = () => {
    fetch('http://paulkotov.localtest.me:5000/auth' ,{
      mode: 'no-cors',
      method:  'GET',
      headers: {
        'Content-type' : 'plain/text'
      }
    }).then(r => r.json())
      .then( (result) => {
        this.setState({ profile: result });
        this.props.login(this.state.profile);  
      }).catch(alert);  
  };

  render(){
    return (
      <div>
        { this.loadProfile() }
        { isObjEmpty(this.state.profile) ? this.RenderSocial() : this.RenderAuth() } 
      </div>
    );
  }
}

AuthPanel.propTypes = {
  login: PropTypes.func.isRequired,
  logout: PropTypes.func.isRequired
};

export default AuthPanel;
