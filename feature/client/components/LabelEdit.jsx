import React from 'react';

import {
  Container,
  Button,
  Card,
  Form,
  Col,
  Row,
  InputGroup,
} from 'react-bootstrap';

class EditLabel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      description: '',
      color: '',
    };
  }

  componentDidMount() {
    const id = this.props.props.props._id;
    fetch(`http://localhost:3000/api/v1/labels/${id}`)
      .then(res => res.json())
      .then(label => {
        this.setState({
          name: label.label.name,
          description: label.label.description,
          color: label.label.color,
        });
      });
  }

  handleSubmit = event => {
    event.preventDefault();
    const name = this.state.name;
    const description = this.state.description;
    const color = this.state.color;
    const id = this.props.props.props._id;

    if (!name || !description || !color)
      return alert('Please enter all fields');

    const toUpdateLabel = {
      name,
      description,
      color,
    };

    fetch(`http://localhost:3000/api/v1/labels/${id}`, {
      method: 'PUT',
      body: JSON.stringify(toUpdateLabel),
      headers: { 'Content-Type': 'application/json' },
    })
      .then(res => res.json())
      .then(updatedLabel => {
        // alert(` ${updatedLabel.name} label is updated!`);
      })
      .then(this.props.action())
      .then(this.props.props.handleSetState());
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    return (
      <Card>
        <Card.Body>
          <Form>
            <Row>
              <Col xs={4}>
                <Form.Control
                  value={this.state.name}
                  name='name'
                  placeholder='Label Name'
                  onChange={this.handleChange}
                />
              </Col>
              <Col xs={4}>
                <Form.Control
                  value={this.state.description}
                  name='description'
                  placeholder='Description'
                  onChange={this.handleChange}
                />
              </Col>
              <Col xs={2}>
                <InputGroup>
                  <InputGroup.Prepend>
                    <InputGroup.Text id='inputGroupPrepend'>#</InputGroup.Text>
                  </InputGroup.Prepend>
                  <Form.Control
                    value={this.state.color}
                    name='color'
                    placeholder='Color hex code'
                    onChange={this.handleChange}
                  />
                </InputGroup>
              </Col>

              <Col xs={1}>
                <Button variant='outline-success' onClick={this.handleSubmit}>
                  Submit
                </Button>{' '}
              </Col>
              <Col xs={1}>
                <Button variant='outline-danger' onClick={this.props.action}>
                  Cancel
                </Button>
              </Col>
            </Row>
          </Form>
        </Card.Body>
      </Card>
    );
  }
}

export default EditLabel;
