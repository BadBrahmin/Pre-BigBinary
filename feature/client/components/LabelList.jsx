import React from 'react';
import AddNewLabel from './AddNewLabel';
import { Container, Table, Button, Card, Col, Row } from 'react-bootstrap';
import '../../public/stylesheets/style.css';
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

  handleSetState = () => {
    this.componentDidMount();
  };

  render() {
    const labels = this.state && this.state.labels;

    return (
      <Container>
        <div>
          {this.state.displayAddNew ? (
            <div>
              <AddNewLabel
                action={this.displayAddNew}
                handleSetState={this.handleSetState}
              />
            </div>
          ) : (
            <Button variant='outline-primary' onClick={this.displayAddNew}>
              Add New
            </Button>
          )}
        </div>

        <br></br>
        <Card style={{ padding: '2rem' }} bg='light'>
          <div>
            <strong>{labels && labels.length}</strong>
            <span> Labels</span>
          </div>
        </Card>
        <div>
          {labels &&
            labels.map(label => {
              return (
                <LabelCard
                  props={label}
                  handleSetState={() => this.handleSetState}
                />
              );
            })}
        </div>
        <div
          style={{
            textAlign: 'center',
            paddingTop: '3rem',
            fontSize: '0.9rem',
          }}
        >
          <span>-----</span> <br></br>
          <span>
            GitHub Labels Feature for Pre-BigBinary. Project on{' '}
            <a
              href='https://github.com/BadBrahmin/Pre-BigBinary/'
              target='_blank'
            >
              GitHub
            </a>
          </span>
        </div>
      </Container>
    );
  }
}

export default LabelList;
