import React, { Component } from 'react';
import Input from '../../ui/styled/Input';
import Form from '../../ui/styled/Form';

const PLACEHOLDER = "search: Bohemian Rhapsody";

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
    const { value } = this.state;
    this.setState({ value: '' });
    if (value && value.length > 0) {
      this.props.onSubmit(value);
    }
  }

  render() {
    return (
      <div>
      <Form onSubmit={this.handleSubmit}>
        <Input
          mt={this.props.mt}
          type="text"
          ref={(input) => { this.input = input }}
          placeholder={PLACEHOLDER}
          onChange={this.handleChange}/>
      </Form>
    </div>
    )
  }
}
