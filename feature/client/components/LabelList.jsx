import React from 'react';
import AddNewLabel from './AddNewLabel';
import { Container, Table, Button, Card } from 'react-bootstrap';
import '../../public/stylesheets/style.css';

class LabelList extends React.Component {
  constructor() {
    super();
    this.state = {
      labels: '',
      displayAddNew: false,
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
    console.log('hit');
    this.setState({
      displayAddNew: !this.state.displayAddNew,
    });
  };

  handleUpdate = () => {
    const id = 'wherever the ID will come from';
    const data = {
      name: 'whatever name',
      description: 'whatever again',
      color: 'purr',
    };

    fetch(`http://localhost:3000/api/v1/labels/${id}`, {
      method: 'PUT',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(res => res.json())
      .then(updatedLabel => console.log(updatedLabel));
  };

  handleDelete = () => {
    const id = 'something something';

    fetch(`http://localhost:3000/api/v1/labels/${id}`, {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
    })
      .then(res => res.json())
      .then(res => alert(res));
  };

  render() {
    const labels = this.state && this.state.labels;
    console.log(this.state, 'labels');

    return (
      <Container>
        {this.state.displayAddNew ? (
          <AddNewLabel />
        ) : (
          <Button variant='outline-primary' onClick={this.displayAddNew}>
            Add New
          </Button>
        )}

        {labels &&
          labels.map(label => {
            return (
              <Card>
                <Card.Body>
                  <Card.Text>{label.name}</Card.Text>
                  <Card.Text>{label.description}</Card.Text>
                  <Card.Link href='#'>Update</Card.Link>
                  <Card.Link href='#'>Delete</Card.Link>
                </Card.Body>
              </Card>
            );
          })}
      </Container>
    );
  }
}

export default LabelList;
