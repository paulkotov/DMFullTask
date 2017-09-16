import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { isObjEmpty } from '../libs/api';

const Li = styled.li`
    background-color: #FFFFCC;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    cursor: pointer;
    & .list-group-item:hover {
          background-color: white;
      } 
    `;

export default class PokeItem extends Component {
  static propTypes = {
    number: PropTypes.string,
    pokemon: PropTypes.object.isRequired,
    profile: PropTypes.object.isRequired,
  };

  constructor(){
    super();  
    this.state = {
      name: ' ',
      url: ' '
    };
  }

  // saveThis(){
  //   const { pokemon } = this.props;
  // }//to API

  SaveButton = () => (
    <button className="save btn btn-default">Save</button>   
  )

  showInfo = pokemon => (
      <div className="pokemon-info">
      <div>
        ID: <strong>{'0'}</strong>{', Name: '}
        <strong>{pokemon.name}</strong> {', URL: '}
        <strong>{pokemon.url}</strong>
        <br/>
        <a href={pokemon.url}>Full info</a>
      </div>           
      {isObjEmpty(this.props.profile) ? null : this.SaveButton()}    
    </div> 
 );

  render() {
    const { pokemon } = this.props;
    return (
      <Li className="list-group-item">
        <div className="view">
          {(pokemon.url !=' ' && pokemon.name !=' ') ? this.showInfo(pokemon) : null}
        </div>
      </Li>
    );
  }
}  