import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';

export default class TextInput extends Component {
  static propTypes = {
    onSave: PropTypes.func,
    name: PropTypes.string,
    text: PropTypes.string,
    placeholder: PropTypes.string,
    editing: PropTypes.bool,
    newBook: PropTypes.bool
  };

  constructor(props){
    super(props);
    this.state = {
      text: this.props.text || ''
    };
  }

  handleSubmit = e => {
    const text = e.target.value.trim();
    if (e.which === 13) {
      this.props.onSave(text);
      if (this.props.newBook) {
        this.setState({ text: '' });
      }
    }
  };

  handleChange = e => {
    this.setState({ text: e.target.value });
  };

  render() {
    return (
      <input className={
        classnames({
          edit: this.props.editing,
          'newbook': this.props.newBook
        })}
        type="text"
        name={this.props.name}
        placeholder={this.props.placeholder}
        value={this.state.text}
        onChange={this.handleChange}
        onKeyDown={this.handleSubmit} />
    );
  }
}
