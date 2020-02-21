import React from 'react';

import { Container, Button, Card, Form, Col } from 'react-bootstrap';

class EditLabel extends React.Component {
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

    const toUpdatedLabel = {
      name,
      description,
      color,
    };

    fetch(`http://localhost:3000/api/v1/labels/${id}`, {
      method: 'PUT',
      body: JSON.stringify(toUpdatedLabel),
      headers: { 'Content-Type': 'application/json' },
    })
      .then(res => res.json())
      .then(updatedLabel => {
        alert(`label ${updatedLabel.name} updated!`);
      });
  };
  render() {
    console.log(this.props, 'props');
    return (
      <Container>
        <Form>
          <Form.Row>
            <Col>
              <Form.Control
                value={this.state.name}
                name='name'
                placeholder='Label Name'
                onChange={this.handleChange}
              />
            </Col>
            <Col>
              <Form.Control
                value={this.state.description}
                name='description'
                placeholder='Description'
                onChange={this.handleChange}
              />
            </Col>
            <Col>
              <Form.Control
                value={this.state.color}
                name='color'
                placeholder='Color'
                onChange={this.handleChange}
              />
            </Col>
          </Form.Row>
        </Form>
        <Button variant='outline-primary' onClick={this.handleSubmit}>
          Submit
        </Button>
        <Button variant='outline-primary' onClick={this.props.action}>
          Cancel
        </Button>
      </Container>
    );
  }
}

export default EditLabel;
