import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import classNames from 'classNames';
import { isObjEmpty, savePokemon, delPokemon } from '../libs/api';

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
    number: PropTypes.number,
    own: PropTypes.bool,
    pokemon: PropTypes.object.isRequired,
    profile: PropTypes.object.isRequired,
  };

  constructor(){
    super();  
    this.state = {
      name: ' ',
      url: ' ',
      deleted: false
    };
  }

  savePokemonHandler = () => {
    const { pokemon } = this.props;
    savePokemon(pokemon);
  }

  delPokemonHandler = async () => {
    const { pokemon } = this.props;
    await delPokemon(pokemon);
    this.setState({
      deleted: true
    });
  }

  SaveButton = () => (
    <button className="save btn btn-default" onClick={this.savePokemonHandler}>Save</button>   
  )
  
  DelButton = () => (
    <button className={classNames({
      'del' : true,
      'btn': true,
      'btn-default': true,
      'disabled': this.state.deleted }
      )} 
      onClick={this.delPokemonHandler}>Del</button>   
  )

  showInfo = pokemon => (
    <div className="pokemon-info">
      <div>
        ID: <strong>{this.props.number}</strong>{', Name: '}
        <strong>{pokemon.name}</strong> {', URL: '}
        <strong>{pokemon.url}</strong>
        <br/>
        <a href={pokemon.url} target="blank">Full info</a>
      </div>           
      {this.props.own===true ? null : this.SaveButton()}
      {!isObjEmpty(this.props.profile)&&this.props.own===true ? this.DelButton() : null}    
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