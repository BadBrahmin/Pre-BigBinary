import React from 'react';
import AddNewLabel from './AddNewLabel';
import { Container, Table, Button, Card, Col, Row } from 'react-bootstrap';
import '../../public/stylesheets/style.css';
import EditLabel from './EditLabel';

class LabelList extends React.Component {
  constructor() {
    super();
    this.state = {
      labels: '',
      displayAddNew: false,
      displayEditLabel: false,
    };
  }

  componentDidMount() {
    fetch('http://localhost:3000/api/v1/labels')
      .then(res => res.json())
      .then(labels => {
        this.setState({ labels: labels.labels });
      });
  }

  displayAddNew = () => {
    this.setState({
      displayAddNew: !this.state.displayAddNew,
    });
  };

  displayEditLabel = () => {
    this.setState({
      displayEditLabel: !this.state.displayEditLabel,
    });
  };

  // handleUpdate = id => {
  //   const data = {
  //     name: 'whatever name',
  //     description: 'whatever again',
  //     color: 'purr',
  //   };

  //   fetch(`http://localhost:3000/api/v1/labels/${id}`, {
  //     method: 'PUT',
  //     body: JSON.stringify(data),
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //   })
  //     .then(res => res.json())
  //     .then(updatedLabel => console.log(updatedLabel));
  // };

  handleDelete = id => {
    fetch(`http://localhost:3000/api/v1/labels/${id}`, {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
    })
      .then(res => res.json())
      .then(res => {
        alert('Label Deleted!');
      })
      .then(this.componentDidMount());
  };

  render() {
    const labels = this.state && this.state.labels;
    console.log(this.state, 'labels');

    return (
      <Container>
        {this.state.displayAddNew ? (
          <div>
            <AddNewLabel action={this.displayAddNew} />
          </div>
        ) : (
          <Button variant='outline-primary' onClick={this.displayAddNew}>
            Add New
          </Button>
        )}

        <br></br>
        {!this.state.displayEditLabel ? (
          <div>
            {labels &&
              labels.map(label => {
                return (
                  <Card key={label._id}>
                    <Card.Body>
                      <Row>
                        <Col>
                          <Card.Text xs={2}>{label.name}</Card.Text>
                        </Col>
                        <Col xs={5}>
                          <Card.Text>{label.description}</Card.Text>
                        </Col>
                        <Col xs={1}>
                          <Button
                            variant='link'
                            onClick={this.displayEditLabel}
                          >
                            Edit
                          </Button>
                        </Col>
                        <Col xs={1}>
                          <Button
                            variant='link'
                            onClick={() => this.handleDelete(label._id)}
                          >
                            Delete
                          </Button>
                        </Col>
                      </Row>
                    </Card.Body>
                  </Card>
                );
              })}
          </div>
        ) : (
          <EditLabel />
        )}
      </Container>
    );
  }
}

export default LabelList;
