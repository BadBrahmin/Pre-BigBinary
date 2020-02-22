import React from 'react';

import { Container, Button, Card, Form, Col } from 'react-bootstrap';

class AddNewLabel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      description: '',
      color: '',
    };
  }

  handleChange = event => {
    // event.preventDefault();
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    const name = this.state.name;
    const description = this.state.description;
    const color = this.state.color;

    if (!name || !description || !color)
      return alert('Please enter all fields');

    const label = {
      name,
      description,
      color,
    };

    fetch('http://localhost:3000/api/v1/labels', {
      method: 'POST',
      body: JSON.stringify(label),
      headers: { 'Content-Type': 'application/json' },
    })
      .then(res => res.json())
      .then(label => {
        alert(`label ${label.name} created!`);
      })
      .then(this.props.action())
      .then(this.props.handleSetState());
  };
  render() {
    return (
      <Container>
        <Form>
          <h2> Add New Label</h2>
          <Form.Row>
            <Col xs={3}>
              <Form.Control
                value={this.state.name}
                name='name'
                placeholder='Label Name'
                onChange={this.handleChange}
              />
            </Col>
            <Col xs={5}>
              <Form.Control
                value={this.state.description}
                name='description'
                placeholder='Description'
                onChange={this.handleChange}
              />
            </Col>
            <Col xs={2}>
              <Form.Control
                value={this.state.color}
                name='color'
                placeholder='Color'
                onChange={this.handleChange}
              />
            </Col>
            <Col xs={1}>
              <Button
                variant='outline-success'
                type='submit'
                onClick={this.handleSubmit}
              >
                Submit
              </Button>{' '}
            </Col>
            <Col xs={1}>
              <Button variant='outline-danger' onClick={this.props.action}>
                Cancel
              </Button>
            </Col>
          </Form.Row>
        </Form>
      </Container>
    );
  }
}

export default AddNewLabel;
