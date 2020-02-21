import React from 'react';

import { Container, Button, Card, Form, Col, Row } from 'react-bootstrap';

class EditLabel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      label: '',
    };
  }

  componentDidMount() {
    const id = this.props.props._id;
    fetch(`http://localhost:3000/api/v1/labels/${id}`)
      .then(res => res.json())
      .then(labels => {
        this.setState({ label: labels.label });
      });
  }

  handleChange = event => {
    event.preventDefault();
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
        console.log(updatedLabel, 'updated');
        alert(`label ${updatedLabel.name} updated!`);
      });
  };
  render() {
    console.log(this.state.label, 'propsedit');
    return (
      <Card>
        <Card.Body>
          <Form>
            <Row>
              <Col>
                <Form.Control
                  value={this.state.label.name}
                  name='name'
                  placeholder='Label Name'
                  onChange={this.handleChange}
                />
              </Col>
              <Col xs={5}>
                <Form.Control
                  value={this.state.label.description}
                  name='description'
                  placeholder='Description'
                  onChange={this.handleChange}
                />
              </Col>
              <Col xs={2}>
                <Form.Control
                  value={this.state.label.color}
                  name='color'
                  placeholder='Color'
                  onChange={this.handleChange}
                />
              </Col>
            </Row>
          </Form>
          <br></br>
          <Button variant='outline-primary' onClick={this.handleSubmit}>
            Submit
          </Button>
          <Button variant='outline-primary' onClick={this.props.action}>
            Cancel
          </Button>
        </Card.Body>
      </Card>
    );
  }
}

export default EditLabel;
