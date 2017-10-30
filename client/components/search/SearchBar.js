import React, { Component } from 'react';
import { searchSongs } from '../../services/spotify';

export default class SearchBar extends Component {

  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      value: null
    };
  }

  handleChange(event) {
    this.setState({
      value: event.target.value
    })
  }

  handleSubmit(event) {
    event.preventDefault();
    event.stopPropagation();
    if (this.state.value) {
      this.props.onSubmit(this.state.value);
    }
  }

  render() {
    return (
      <div>
      <form>
        <input type="text" placeholder="Michael Jackson" onChange={this.handleChange}/>
        <div onClick={this.handleSubmit}>holi</div>
      </form>
    </div>
    )
  }
}
