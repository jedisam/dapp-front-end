import React from 'react';

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
  return (
    <>
      <div className="content">
        <Row>
          <Col md="12">
            <Card>
              <CardHeader>
                <CardTitle tag="h4">Trainee List</CardTitle>
              </CardHeader>
              <CardBody>
                <Table className="tablesorter" responsive>
                  <thead className="text-primary">
                    <tr>
                      <th>Trainee Name</th>
                      <th>Country</th>
                      <th>City</th>
                      <th className="text-center">Status</th>
                      <th className="text-center"></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Dakota Rice</td>
                      <td>Niger</td>
                      <td>Oud-Turnhout</td>
                      <td className="text-center">Pass</td>
                      <td className="text-center">
                        <Button variant="primary" className="btn-primary">
                          Mint
                        </Button>
                      </td>
                    </tr>
                    <tr>
                      <td>Amanu Neftalem</td>
                      <td>Ethiopia</td>
                      <td>Addis Ababa</td>
                      <td className="text-center">Pass</td>
                      <td className="text-center">
                        <Button variant="primary" className="btn-primary">
                          Mint
                        </Button>
                      </td>
                    </tr>
                    <tr>
                      <td>Sage Rodriguez</td>
                      <td>Kenya</td>
                      <td>Nairobi</td>
                      <td className="text-center">Pass</td>
                      <td className="text-center">
                        <Button variant="primary" className="btn-primary">
                          Mint
                        </Button>
                      </td>
                    </tr>
                    <tr>
                      <td>Philip Chaney</td>
                      <td>Sudan</td>
                      <td>Khartoum</td>
                      <td className="text-center">Fail</td>
                      <td className="text-center">Mint</td>
                    </tr>
                    <tr>
                      <td>Doris Greene</td>
                      <td>Malawi</td>
                      <td>Feldkirchen in Kärnten</td>
                      <td className="text-center">Fail</td>
                      <td className="text-center">Mint</td>
                    </tr>
                    <tr>
                      <td>Mason Porter</td>
                      <td>Chile</td>
                      <td>Gloucester</td>
                      <td className="text-center">Pass</td>
                      <td className="text-center">
                        <Button variant="primary" className="btn-primary">
                          Mint
                        </Button>
                      </td>
                    </tr>
                    <tr>
                      <td>Yohannes Abate</td>
                      <td>Ethiopia</td>
                      <td>Addis Ababa</td>
                      <td className="text-center">Pass</td>
                      <td className="text-center">
                        <Button variant="primary" className="btn-primary">
                          Mint
                        </Button>
                      </td>
                    </tr>
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
