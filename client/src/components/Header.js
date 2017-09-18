import React, { PropTypes, Component } from 'react';
import './Header.css';
//import { submittedData } from '../libs/api';
import { isObjEmpty } from '../libs/api';

export default class Header extends Component {
  static propTypes = {
    profile: PropTypes.object.isRequired,
    addData: PropTypes.func.isRequired,
    deleteData: PropTypes.func.isRequired,
    loadData: PropTypes.func.isRequired
  }
  
  constructor(){
    super();
    this.state = {
      count: 0,
      data: [],
      loginShow: false,
      fulldata: {}
    };
  }
  
  onAddHandler = () => {
    fetch(' https://pokeapi.co/api/v2/pokemon/?limit=1000' ,{
      mode: 'cors',
      method:  'GET',
      headers: {
        'Content-type': 'plain/text'
      }
    }).then(r => r.json())
      .then( (result) => {
        this.setState(
          { count: result.count, 
            data: result.results }
        );
        this.props.addData(this.state.data);  
      }).catch(alert);   
  }

  onSavedDataHandler = () => {
    fetch('http://paulkotov.localtest.me:5000/pokemons/showall' ,{
      method:  'GET',
      credentials: 'include',
      headers: {
        'Content-type': 'plain/text'
      }
    }).then(r => r.json())
    .then( (result) => {
      this.setState(
        { data: result }
      );
      // console.log(this.state.data);
      this.props.loadData(result);
    }).catch((err)=>console.log(err));  
  }


  onDelHandler = () => {
    this.props.deleteData();
  }
  
  loadData = () => (
      <span className="load" >
        <p>My data<br/></p> 
        <button className="loaddata btn btn-default" onClick={this.onSavedDataHandler}>
          Saved
        </button>
      </span>
    )
 
  render() {
    const { profile } = this.props;
    return (
      <div>
        <h1 className="title">Decision mapper test task</h1>
        <div className="header">
          <span className="delete">
              <p>Load data<br/></p> 
              <button className="add btn btn-default" 
              onClick={this.onAddHandler}>
              Load
            </button>
          </span>
          <span className="add">
              <p>Delete data<br/></p>
              <button className="btn btn-default" 
              onClick={this.onDelHandler}>
              Clear
              </button>
          </span> 
            {isObjEmpty(profile) ? null : this.loadData()}
      </div>
    </div>
    );
  }
}
