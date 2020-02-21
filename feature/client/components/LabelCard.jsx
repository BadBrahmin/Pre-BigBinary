import React from 'react';
import { Container, Table, Button, Card, Col, Row } from 'react-bootstrap';
import EditLabel from './LabelEdit';

class LabelCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      description: '',
      color: '',
      displayEditLabel: false,
    };
  }

  displayEditLabel = () => {
    this.setState({
      displayEditLabel: !this.state.displayEditLabel,
    });
  };

  handleDelete = id => {
    fetch(`http://localhost:3000/api/v1/labels/${id}`, {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
    })
      .then(res => res.json())
      .then(res => {
        alert('Label Deleted!');
      })
      .then(this.props.handleSetState());
  };

  render() {
    return (
      <div>
        {!this.state.displayEditLabel ? (
          <Card key={this.props.props._id}>
            <Card.Body>
              <Row>
                <Col>
                  <Card.Text xs={2}>
                    <Button variant='outline-success'>
                      {this.props.props.name}
                    </Button>
                  </Card.Text>
                </Col>
                <Col xs={5}>
                  <Card.Text>{this.props.props.description}</Card.Text>
                </Col>
                <Col xs={1}>
                  <Button variant='link' onClick={this.displayEditLabel}>
                    Edit
                  </Button>
                </Col>
                <Col xs={1}>
                  <Button
                    variant='link'
                    onClick={() => this.handleDelete(this.props.props._id)}
                  >
                    Delete
                  </Button>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        ) : (
          <EditLabel props={this.props} action={this.displayEditLabel} />
        )}
      </div>
    );
  }
}

export default LabelCard;
