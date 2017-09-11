import React, { Component, PropTypes } from 'react';
import { Redirect } from 'react-router-dom';
import styled from 'styled-components';
import { isObjEmpty } from '../libs/api';

const SocialContainer = styled.div`
  display: inline-flex;
  flex-direction: row-reverse;
  `;
  
const SocialIcon = styled.div`
  pointer: cursor;
  padding: 5px;
`;

class AuthPanel extends Component {
  
  constructor(){
    super();
    this.state = {
      isAuth: false,
      profile: {}
    };
  }

  onAddHandler = () => {
    fetch(' http://paulkotov.localtest.me:5000/' ,{
      mode: 'cors',
      method:  'GET',
      headers: {
        'Content-type' : 'plain/text'
      }
    }).then(r => r.json())
      .then( (result) => {
        this.setState(
          { count: result.count, 
            data: result.results }
        );
        this.props.login(this.state.profile);  
      }).catch(alert);   
  }

  VKRender(){
    return(
      <span>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
        <path className="st0" d="M13.162 18.994c.609 0 .858-.406.851-.915-.031-1.917.714-2.949 2.059-1.604 1.488 1.488 1.796 2.519 3.603 2.519h3.2c.808 0 1.126-.26 1.126-.668 0-.863-1.421-2.386-2.625-3.504-1.686-1.565-1.765-1.602-.313-3.486 1.801-2.339 4.157-5.336 2.073-5.336h-3.981c-.772 0-.828.435-1.103 1.083-.995 2.347-2.886 5.387-3.604 4.922-.751-.485-.407-2.406-.35-5.261.015-.754.011-1.271-1.141-1.539-.629-.145-1.241-.205-1.809-.205-2.273 0-3.841.953-2.95 1.119 1.571.293 1.42 3.692 1.054 5.16-.638 2.556-3.036-2.024-4.035-4.305-.241-.548-.315-.974-1.175-.974h-3.255c-.492 0-.787.16-.787.516 0 .602 2.96 6.72 5.786 9.77 2.756 2.975 5.48 2.708 7.376 2.708z"/>
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

  TwitterRender(){
    return(
      <span>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-.139 9.237c.209 4.617-3.234 9.765-9.33 9.765-1.854 0-3.579-.543-5.032-1.475 1.742.205 3.48-.278 4.86-1.359-1.437-.027-2.649-.976-3.066-2.28.515.098 1.021.069 1.482-.056-1.579-.317-2.668-1.739-2.633-3.26.442.246.949.394 1.486.411-1.461-.977-1.875-2.907-1.016-4.383 1.619 1.986 4.038 3.293 6.766 3.43-.479-2.053 1.08-4.03 3.199-4.03.943 0 1.797.398 2.395 1.037.748-.147 1.451-.42 2.086-.796-.246.767-.766 1.41-1.443 1.816.664-.08 1.297-.256 1.885-.517-.439.656-.996 1.234-1.639 1.697z"/>
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
      <SocialIcon><button className="btn btn-default" onClick={() => (
                          <Redirect to="paulkotov.localtest.me:5000/auth/facebook"/>)}>{this.FacebookRender()}</button></SocialIcon>
      <SocialIcon><button className="btn btn-default" onClick={() => (
                          <Redirect to="paulkotov.localtest.me:5000/auth/twitter"/>)}>{this.TwitterRender()}</button></SocialIcon>
      <SocialIcon><button className="btn btn-default" onClick={() => (
                          <Redirect to="paulkotov.localtest.me:5000/auth/google"/>)}>{this.GoogleRender()}</button></SocialIcon>
      <SocialIcon><button className="btn btn-default" onClick={() => (
                          <Redirect to="paulkotov.localtest.me:5000/auth/vk"/>)}>{this.VKRender()}</button></SocialIcon>
    </SocialContainer>
  );
  
  RenderAuth = (isAuth) => (
    <div className="authorized">
      Loged in as: <strong>{isAuth.User}</strong>
      <button className="btn btn-default" onClick={this.OnLogoutHandler}>LogOut</button>  
    </div>
    );

  OnLogoutHandler = () => {
    this.props.logout();
  };

  render(){
    const { isAuth } = this.props;

    return (
      <div>
        { isObjEmpty(isAuth) ? this.RenderSocial() : this.RenderAuth(isAuth) } 
      </div>
    );
  }
}

AuthPanel.propTypes = {
  isAuth: PropTypes.object.isRequired,
  login: PropTypes.func.isRequired,
  logout: PropTypes.func.isRequired
};

export default AuthPanel;