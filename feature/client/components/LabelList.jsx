import React from 'react';
import AddNewLabel from './AddNewLabel';
import { Container, Table, Button, Card, Col, Row } from 'react-bootstrap';
import '../../public/stylesheets/style.css';
import EditLabel from './LabelEdit';
import LabelCard from './LabelCard';

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
    this.setState({
      displayAddNew: !this.state.displayAddNew,
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

        {labels &&
          labels.map(label => {
            return <LabelCard props={label} />;
          })}
      </Container>
    );
  }
}

export default LabelList;
