import React, { useEffect, useState } from 'react';

// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Table,
  Row,
  Col,
  Button,
} from 'reactstrap';

function Tables() {
  const [trainees, setTrainees] = useState([]);

  // Get all trainees from 'http://localhost:5000/api/trainees' and display them in a table
  useEffect(() => {
    async function fetchData() {
      const response = await fetch('http://localhost:8000/api/v1/trainees');
      const data = await response.json();
      setTrainees(data.data.trainees);
    }
    fetchData();
  }, []);

  // a component to loop throught the trainees list and display them in a table
  const TraineeTable = ({ trainees }) => {
    return trainees.map((trainee) => {
      return (
        <tr key={trainee._id}>
          <td>{trainee.name}</td>
          <td>{trainee.email}</td>
          <td>{trainee.country}</td>
          <td>{trainee.status}</td>
          {trainee.status == 'pass' ? (
            <td className="text-center">
              <Button variant="primary" className="btn-primary">
                Mint
              </Button>
            </td>
          ) : (
            <td className="text-center">Mint</td>
          )}
        </tr>
      );
    });
  };

  return (
    <>
      <div className="content">
        <Row>
          <Col md="12">
            <Card>
              <CardHeader>
                <CardTitle tag="h4">Tenx Admin Dashboard</CardTitle>
              </CardHeader>
              <CardBody>
                <CardTitle tag="h4"> Trainee List </CardTitle>
                <Table className="tablesorter" responsive>
                  <thead className="text-primary">
                    <tr>
                      <th>Trainee Name</th>
                      <th>Country</th>
                      <th>City</th>
                      <th className="text-right">Status</th>
                      <th className="text-center"></th>
                    </tr>
                  </thead>
                  <tbody>
                    <TraineeTable trainees={trainees} />
                  </tbody>
                </Table>
              </CardBody>
            </Card>
          </Col>
          <Col md="12">
            <Card className="card-plain">
              <CardHeader>
                <CardTitle tag="h4">Optins</CardTitle>
                <p className="category">
                  List of trainees that opted in for a certificate. You can
                  choose to accept or decline each request!
                </p>
              </CardHeader>
              <CardBody>
                <Table className="tablesorter" responsive>
                  <thead className="text-primary">
                    <tr>
                      <th>Name</th>
                      <th>Status</th>
                      <th className="text-center">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Dakota Rice</td>
                      <td>Pass</td>
                      <td className="text-center">
                        <Button variant="success" className="btn-success">
                          Accept
                        </Button>{' '}
                        <Button variant="danger" className="btn-danger">
                          Decline
                        </Button>
                      </td>
                    </tr>
                    <tr>
                      <td>Doris Greene</td>
                      <td>Fail</td>
                      <td className="text-center">
                        <Button variant="success" className="btn-success">
                          Accept
                        </Button>{' '}
                        <Button variant="danger" className="btn-danger">
                          Decline
                        </Button>
                      </td>
                    </tr>
                    <tr>
                      <td>Yohannes Abate</td>
                      <td>Pass</td>
                      <td className="text-center">
                        <Button variant="success" className="btn-success">
                          Accept
                        </Button>{' '}
                        <Button variant="danger" className="btn-danger">
                          Decline
                        </Button>
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Tables;
