import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';

export default class SearchBar extends Component {
  handleChange = (e) => {
    this.setState(this.props.updateSearchVal(e.target.value));
  }

  render() {
    return (
      <>
        <Form className="search-form" onSubmit={e => {e.preventDefault();}}>
          <Form.Group className="mb-4" controlId="searchForm">
            <Form.Label> </Form.Label>
            <Form.Control
              onChange={this.handleChange}
              type="text"
              placeholder="Search for a specific beast!"
            />
            <Form.Text className="text-muted">
            </Form.Text>
          </Form.Group>
        </Form>
      </>
    );
  }
}
