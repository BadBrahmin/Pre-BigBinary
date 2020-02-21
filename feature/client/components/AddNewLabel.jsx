import React from 'react';

import { Container, Button, Card, Form, Col } from 'react-bootstrap';

class AddNewLabel extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',
      description: '',
      color: '',
    };
  }

  render() {
    return (
      <Container>
        <Form>
          <Form.Row>
            <Col>
              <Form.Control placeholder='Label Name' />
            </Col>
            <Col>
              <Form.Control placeholder='Description' />
            </Col>
            <Col>
              <Form.Control placeholder='Color' />
            </Col>
          </Form.Row>
        </Form>
        <Button variant='outline-primary'>Submit</Button>
      </Container>
    );
  }
}

export default AddNewLabel;
