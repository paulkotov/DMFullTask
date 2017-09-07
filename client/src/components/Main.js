import React, { Component, PropTypes } from 'react';
import PokeItem from './PokeItem';
import FilterPanel from './Filterpanel';
import styled from 'styled-components';

const TableTitle = styled.div`
  background:  #E0E0E0;;
`;

const Top = () => (
  <div>
    <br/><TableTitle>
      <strong>Result</strong>
    </TableTitle>
  </div>
);

export default class Main extends Component {
  static propTypes = {
    pokemons: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired,
    auth: PropTypes.object.isRequired
  }

  constructor(){
    super();
    this.state = { 
      filter: 'SHOW_ALL',
      name: ''

    };
  }

  handleShow = filter => {
    this.setState({ 
      filter: 'NAME', 
      name: filter });
  }

  renderToggleAll(completedCount) {
    const { pokemons, actions } = this.props;
    if (pokemons.length > 0) {
      return (
        <input className="toggle-all"
               type="checkbox"
               checked={completedCount === pokemons.length}
               onChange={actions.completeAll} />
      );
    }
  }

  resetFilter = () => {
    this.setState({
      filter: 'SHOW_ALL',
      name: ''
    });
  }

  renderFooter(count) {
    const { pokemons } = this.props;
    const { filter } = this.state;

    if (pokemons.length) {
      return (
        <FilterPanel filter={filter}
                onShow={this.handleShow}
                count={count} />
      );
    }
    else {
      return (
        <div>
          <hr/>
          No records in DB
        </div>
      );
    }
  }

  render() {
    const { pokemons, auth } = this.props;
    const count = pokemons.length;
    const filtered = pokemons.filter((elem) => {
      switch(this.state.filter){     
        case 'NAME': 
          return (elem.name === this.state.name) ? true : false;

        default:
          return true;
      }
    });  
    
    return (
      <div className="main"><br/>
        {this.renderFooter(count)}
        <button className="btn btn-default" onClick={this.resetFilter}> Reset filter </button>
        <Top/>
        <ul className="pokemons-list list-group">
          {filtered.map(pokemon =>
            <PokeItem key={pokemon.name} number="" pokemon={pokemon} auth={auth}/>
          )}
        </ul>
      </div>
    );
  }
}
