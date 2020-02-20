import React from 'react';
import { Container, Table, Button } from 'react-bootstrap';

class LabelList extends React.Component {
  constructor() {
    super();
    this.state = {
      labels: '',
    };
  }

  componentDidMount() {
    console.log('CDM');
  }

  render() {
    return (
      <Container>
        <Table bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Label Name</th>
              <th>Description</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {/* {labels &&
              labels.map(label => {
                <tr>
                  <td>{label.index}</td>
                  <td>{label.name}</td>
                  <td>{label.description}</td>
                  <td>
                    <Button variant='link'>Edit</Button>
                  </td>
                  <td>
                    <Button variant='link'>Delete</Button>
                  </td>
                </tr>;
              })} */}
            <tr>
              <td>1</td>
              <td>Mark</td>
              <td>Otto</td>
              <td>
                <Button variant='link'>Edit</Button>
              </td>
              <td>
                <Button variant='link'>Delete</Button>
              </td>
            </tr>
          </tbody>
        </Table>
      </Container>
    );
  }
}

export default LabelList;
