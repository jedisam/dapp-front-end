import React, { useEffect, useState } from 'react';
import TraineeList from '../components/TraineeList/TraineeList';
import OptinList from '../components/OptinList/OptinList';
import AddTraineeModal from './Modal';

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
  const [optins, setOptins] = useState([]);
  const [show, setShow] = useState(false);

  useEffect(() => {
    async function fetchData() {
      const traineesData = await fetch('http://localhost:8000/api/v1/trainees');
      const traineesOptinData = await fetch(
        'http://localhost:8000/api/v1/trainees/optin'
      );
      const data = await traineesData.json();
      const data1 = await traineesOptinData.json();
      setTrainees(data.data.trainees);
      setOptins(data1.data.optins);
    }
    fetchData();
  }, []);
  const handleShow = () => setShow(true);
  return (
    <>
      <div className="content">
        <Row>
          <Col md="12">
            <Card>
              <CardHeader>
                <CardTitle tag="h4">Tenx Admin Dashboard</CardTitle>
                <Button
                  variant="primary"
                  onClick={handleShow}
                  style={{ marginLeft: '70rem' }}
                >
                  Add Trainee
                </Button>
                <AddTraineeModal show={show} onHide={() => setShow(false)} />
              </CardHeader>
              <CardBody>
                <CardTitle tag="h4"> Trainee List </CardTitle>
                <Table className="tablesorter" responsive>
                  <thead className="text-primary">
                    <tr>
                      <th>Trainee Name</th>
                      <th>Email</th>
                      <th>Country</th>
                      <th className="text-right">Status</th>
                      <th className="text-center"></th>
                    </tr>
                  </thead>
                  <tbody>
                    <TraineeList trainees={trainees} />
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
                      {/* <th>Status</th> */}
                      <th>Public Address</th>
                      <th className="text-center">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <OptinList traineesOptin={optins} />
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
